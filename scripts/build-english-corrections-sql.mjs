import fs from 'node:fs/promises';
import path from 'node:path';
import { englishCorrectionsById } from '../src/englishCorrections.js';

const outputPath = process.argv[2] || path.resolve('supabase/migrations/20260908113000_correct_visay_english_content.sql');
const updates = Object.entries(englishCorrectionsById).map(([id, correction]) => ({
  id,
  quote_en: correction.saying,
  description_en: correction.explanation,
  story_en: correction.origin
}));

const sqlString = (value) => `'${String(value).replaceAll("'", "''")}'`;
const updateJson = JSON.stringify(updates);
const sql = `-- Correct the audited English Visay content without changing favorites or other languages.
-- Generated from src/englishCorrections.js.

begin;

create temporary table visay_english_content_updates on commit drop as
select *
from jsonb_to_recordset(${sqlString(updateJson)}::jsonb)
  as rows(id text, quote_en text, description_en text, story_en text);

do $$
declare
  source_count integer;
  matched_count integer;
  updated_count integer;
begin
  select count(*) into source_count from visay_english_content_updates;
  if source_count <> 22 then
    raise exception 'VISAY_ENGLISH_CORRECTION_COUNT_MISMATCH: expected 22, got %', source_count;
  end if;

  select count(*) into matched_count
  from proverbs p
  join visay_english_content_updates u on u.id = p.id;
  if matched_count <> source_count then
    raise exception 'VISAY_ENGLISH_CORRECTION_ID_MISMATCH: expected %, matched %', source_count, matched_count;
  end if;

  update proverbs p
  set quote_en = u.quote_en,
      description_en = u.description_en,
      story_en = u.story_en
  from visay_english_content_updates u
  where p.id = u.id;

  get diagnostics updated_count = row_count;
  if updated_count <> source_count then
    raise exception 'VISAY_ENGLISH_CORRECTION_UPDATE_MISMATCH: expected %, updated %', source_count, updated_count;
  end if;
end
$$;

commit;
`;

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, sql);
console.log(`Created ${outputPath}`);
console.log(`Rows: ${updates.length}`);

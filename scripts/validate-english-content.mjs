import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { englishCorrectionsById } from '../src/englishCorrections.js';
import { getProverbVariant, proverbs } from '../src/proverbs.js';

assert.equal(proverbs.length, 200, 'Expected 200 active Visay sayings');
assert.equal(Object.keys(englishCorrectionsById).length, 22, 'Expected 22 audited English corrections');

const byId = new Map(proverbs.map((proverb) => [proverb.id, proverb]));
for (const [id, correction] of Object.entries(englishCorrectionsById)) {
  const proverb = byId.get(id);
  assert.ok(proverb, `Correction references inactive proverb: ${id}`);
  const english = getProverbVariant(proverb, 'en');
  assert.equal(english.saying, correction.saying, `English saying correction not applied: ${id}`);
  assert.equal(english.explanation, correction.explanation, `English description correction not applied: ${id}`);
  assert.equal(proverb.appOriginEn, correction.origin, `English app detail correction not applied: ${id}`);
  assert.equal(proverb.bookStoryEn, english.origin, `Book story must remain separate for ${id}`);
}

const timeHeals = getProverbVariant(byId.get('time-wounds-heels'), 'en');
assert.equal(timeHeals.saying, 'Time heals all wounds');
assert.equal(timeHeals.explanation, 'Painful experiences often become easier to bear as time passes.');

const obsoleteSayings = [
  'Time wounds all heels',
  'Can not see the forest for the trees',
  'Opportunity is missed because it is dressed in overalls and looks like work',
  'A fool will drag you down to their level and beat you with experience',
  'A patch is not the whole coat'
];
const activeEnglishSayings = new Set(proverbs.map((proverb) => getProverbVariant(proverb, 'en').saying));
for (const obsolete of obsoleteSayings) assert.ok(!activeEnglishSayings.has(obsolete), `Obsolete English saying remains active: ${obsolete}`);

const genericRuntimePhrases = [
  'stays relevant because its central pattern reappears',
  'practical demands of craft and coordination',
  'a difficult subject needs to be named',
  'a team reviewing the weak point in an otherwise strong plan',
  'a craftsperson correcting a small flaw before it spreads'
];
for (const proverb of proverbs) {
  assert.ok(proverb.appOriginEn, `Missing appOriginEn: ${proverb.id}`);
  const detail = proverb.appOriginEn.toLowerCase();
  for (const phrase of genericRuntimePhrases) {
    assert.ok(!detail.includes(phrase), `Generated boilerplate remains in app detail ${proverb.id}: ${phrase}`);
  }
}

const supabaseSource = await fs.readFile(new URL('../src/supabaseProverbs.js', import.meta.url), 'utf8');
const appSource = await fs.readFile(new URL('../src/App.js', import.meta.url), 'utf8');
assert.match(supabaseSource, /daily-sayings:supabaseProverbs:v8/);
assert.match(supabaseSource, /englishCorrectionsById\[row\?\.id\]/);
assert.match(appSource, /displayedProverb\.appOriginEn/);
assert.doesNotMatch(appSource, /primaryOrigin/);

console.log('OK: 200 English sayings use audited runtime content; 22 explicit corrections applied.');

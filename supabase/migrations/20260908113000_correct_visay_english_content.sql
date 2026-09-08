-- Correct the audited English Visay content without changing favorites or other languages.
-- Generated from src/englishCorrections.js.

begin;

create temporary table visay_english_content_updates on commit drop as
select *
from jsonb_to_recordset('[{"id":"opportunity-overalls","quote_en":"Opportunity is missed by most people because it is dressed in overalls and looks like work","description_en":"People often overlook opportunities because they look like hard work.","story_en":"This wording is widely attributed to Thomas Edison, although the exact attribution is debated. Its point is that worthwhile opportunities often arrive disguised as effort."},{"id":"fool-experience","quote_en":"Never argue with a fool; they will drag you down to their level and beat you with experience","description_en":"Do not argue with an unreasonable person on terms that reward irrational reasoning.","story_en":"This modern saying is often misattributed to Mark Twain. Its authorship is uncertain, but its warning is specifically about being drawn into a futile argument."},{"id":"running-from-to-why","quote_en":"All men should strive to learn before they die what they are running from, and to, and why","description_en":"Understand what you are trying to escape, what you are pursuing, and why.","story_en":"The line comes from James Thurber’s fable “The Shore and the Sea”, published in Further Fables for Our Time in 1956."},{"id":"falling-knife","quote_en":"A falling knife has no handle","description_en":"Do not try to catch or reverse a dangerous decline before it has stabilized.","story_en":"The image is used as practical safety advice and as a financial warning against buying into a rapid fall before there are signs of stability."},{"id":"one-swallow","quote_en":"One swallow does not make a summer","description_en":"A single favorable sign is not enough to establish a general trend.","story_en":"The image is ancient and appears in Greek thought: seeing one returning swallow is not enough to prove that summer has arrived."},{"id":"earworm","quote_en":"Earworm","description_en":"A catchy song or tune that keeps repeating in your mind.","story_en":"The English term is a translation of the German Ohrwurm and is now used for music that repeats involuntarily in the mind."},{"id":"armed-to-teeth","quote_en":"Armed to the teeth","description_en":"Carrying many weapons; figuratively, very heavily equipped.","story_en":"The phrase has long described someone carrying as many weapons as possible. Colorful stories about holding a knife in the teeth are plausible imagery, not a securely documented single origin."},{"id":"time-wounds-heels","quote_en":"Time heals all wounds","description_en":"Painful experiences often become easier to bear as time passes.","story_en":"A traditional saying about emotional recovery over time. It does not promise that every injury disappears completely, only that pain often becomes less acute."},{"id":"bite-dust","quote_en":"Bite the dust","description_en":"To die, be defeated, or fail.","story_en":"Images of defeated people falling into or biting the dust are old. The expression later became common in popular English, including westerns and modern music."},{"id":"old-broom-corners","quote_en":"A new broom sweeps clean, but an old broom knows the corners","description_en":"Newcomers may bring energy, but experience knows the details.","story_en":"This contrast joins two proverbial images: a new broom brings fresh effort, while an old broom knows the overlooked corners."},{"id":"deep-water","quote_en":"Be in deep water","description_en":"To be in serious trouble or a difficult situation.","story_en":"The metaphor compares serious difficulty with being in water too deep to stand safely."},{"id":"plain-sailing","quote_en":"Plain sailing","description_en":"A situation or process that is easy and free from problems.","story_en":"The idiom comes from sailing imagery and describes smooth, uncomplicated progress rather than a difficulty that has necessarily already passed."},{"id":"cant-see-forest","quote_en":"You cannot see the forest for the trees","description_en":"Focusing on details can prevent you from seeing the larger situation.","story_en":"The American form uses “forest”; British English commonly uses “wood”. The image has parallels in European proverb traditions."},{"id":"writing-wall","quote_en":"The writing is on the wall","description_en":"The signs of impending failure, trouble, or an ending are already clear.","story_en":"The expression comes from the Book of Daniel, where mysterious writing foretells the fall of a kingdom."},{"id":"patch-not-whole","quote_en":"Treat the cause, not just the symptoms","description_en":"A superficial fix will not solve the underlying problem.","story_en":"A modern practical maxim drawn from medicine and problem-solving: lasting improvement requires addressing the cause rather than only its visible effects."},{"id":"downhill-from-here","quote_en":"It is downhill from here","description_en":"Depending on context, what follows may be easier—or the situation may begin to deteriorate.","story_en":"The road metaphor is genuinely ambiguous: moving downhill can require less effort, while “going downhill” can also mean becoming worse."},{"id":"black-swan","quote_en":"A black swan","description_en":"A highly unexpected event with major consequences, often explained as predictable only in hindsight.","story_en":"Black swans overturned an old European assumption that all swans were white. Nassim Nicholas Taleb later popularized the term for rare, high-impact events outside normal expectations."},{"id":"uphill-battle","quote_en":"An uphill battle","description_en":"A difficult struggle that requires sustained effort against strong opposition or unfavorable odds.","story_en":"The metaphor compares a difficult undertaking with fighting or advancing uphill against resistance."},{"id":"fabric-life","quote_en":"The fabric of life","description_en":"The interconnected relationships, experiences, and institutions that make up human life.","story_en":"The metaphor treats life or society as cloth whose many separate threads become one connected whole."},{"id":"heart-sleeve","quote_en":"Wear your heart on your sleeve","description_en":"Show your feelings openly.","story_en":"A documented early form appears in Shakespeare’s Othello, where Iago speaks of wearing his heart upon his sleeve. Popular claims about medieval lovers or knights remain uncertain."},{"id":"tied-up-knots","quote_en":"Tied up in knots","description_en":"To be extremely worried, tense, or confused.","story_en":"The idiom turns tangled rope into an image of emotional tension or mental confusion."},{"id":"glass-half-full","quote_en":"The glass is half full","description_en":"An optimistic person focuses on what is present or possible rather than on what is missing.","story_en":"The familiar half-filled glass illustrates how the same facts can be framed optimistically as half full or pessimistically as half empty."}]'::jsonb)
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

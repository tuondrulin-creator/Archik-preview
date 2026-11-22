var e=`# AI prompt template: c-slovni-druhy

The app fills the placeholders and copies the text to the clipboard; there is no network call.
No personal data, ever. The prompt carries our verified key (one line per word: the word, its part of
speech, the rule), so the model explains it and does not decide on its own which part of speech is
right. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{key}}\`, \`{{rule}}\`,
\`{{source}}\`, \`{{scoring_rules}}\`. \`{{verdict}}\` is the engine's grade of the answer; the model must not
dispute it. \`{{question}}\` shows the instruction and the sentence, \`{{user_answer}}\` one "word – part
of speech" entry per word, \`{{key}}\` one numbered line per word.

Author brief (for the content-author agent; this note is never sent): write original \`slovni-druhy\` items, one
short sentence of at most 12 words, every word a unit (shape and rules in \`README.md\`). Age-appropriate and in the
spirit of the school list: everyday, school and nature vocabulary, nothing inappropriate or obscure. Mostly clear
cases (zřetelné případy); at most about a third may carry a typical trap, each with a source and a unit \`note\`:
\`co\` (zájmeno or spojka), \`jako\` (spojka or příslovce, per the Internetová jazyková příručka), \`jen\` (částice), an
adverb versus a preposition (\`kolem\`). Skip every disputed case without a clear source. Sources: primarily
https://prirucka.ujc.cas.cz; no Wikipedia text; never CERMAT material.

---

Chodím do 9. třídy a připravuji se na přijímací zkoušku z češtiny. V úloze mám u každého slova ve větě určit slovní druh.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Správná odpověď (ověřená):
{{key}}
Pravidla: {{rule}}
Zdroj: {{source}}
Hodnocení u zkoušky: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Správná odpověď je ověřená. Neměň ji a nehledej u slov jiné slovní druhy. Používej jen pravidla výše, žádná jiná pravidla ani zdroje nevymýšlej a nepřidávej žádné podmínky, které tu nejsou. Piš česky, tykej mi, jednoduše a nejvýš na 150 slov. Nechval mě (žádné „výborně“ ani „gratuluji“), nic mi nevyčítej a nepoužívej emoji. Nezjišťuj, jestli jsem kluk, nebo holka.

Odpověz přesně v těchto krocích:
1. Porovnej moje odpovědi se správnými slovo po slovu. Pokud jsou všechny stejné, napiš jen, že je odpověď v pořádku, a skonči.
2. Jinak vypiš jen slova, která mám špatně. U každého napiš správný slovní druh a jeden krátký důvod přesně tak, jak je uvedený ve správné odpovědi výše. Slovo, které mám správně, nikdy nepopisuj jako chybné.
3. Napiš jednu nebo dvě věty o tom, jak si slovní druh příště poznám. Použij jen pravidla uvedená výše.

Pokud si myslíš, že správná odpověď je chybná, napiš to na konci jasně a vysvětli proč, aby šlo chybu nahlásit.
`;export{e as default};
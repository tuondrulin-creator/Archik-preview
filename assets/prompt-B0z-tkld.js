var e=`# AI prompt template: c-zsd

The app fills the placeholders and copies the text to the clipboard; there is no network call.
No personal data, ever. The prompt carries our verified key, so the model explains it and does
not parse the sentence on its own. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`,
\`{{key}}\`, \`{{rule}}\`, \`{{source}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.
Tuned with the harness in \`scripts/prompt-eval/\`; results in \`docs/PROMPT_EVAL.md\`.

---

Jsem žák 9. třídy a připravuji se na přijímací zkoušku z češtiny. V úloze mám ve větě najít podmět a přísudek.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Správná odpověď (ověřená): {{key}}
Pravidla: {{rule}}
Zdroj: {{source}}
Hodnocení u zkoušky: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Správná odpověď je ověřená. Neměň ji a nerozebírej větu jinak. Používej jen pravidla výše, žádná jiná pravidla ani zdroje nevymýšlej a nepřidávej žádné podmínky, které tu nejsou. Piš česky, tykej mi, jednoduše a nejvýš na 150 slov. Nechval mě (žádné „výborně“ ani „gratuluji“), nic mi nevyčítej a nepoužívej emoji. Nezjišťuj, jestli jsem kluk, nebo holka.

Odpověz přesně v těchto krocích:
1. Porovnej moji odpověď se správnou odpovědí slovo po slovu, podmět zvlášť a přísudek zvlášť. Spojky a čárky mezi částmi podmětu při porovnání ignoruj. Pokud mají stejná slova, i když jsou v jiném pořadí, napiš jen, že je odpověď v pořádku, a skonči.
2. Jinak v jedné nebo dvou větách napiš, v čem se moje odpověď liší od správné. Možnosti jsou jen tyto: mám napsaná slova navíc (uveď která), nějaká slova mi chybí (uveď která), mám prohozený podmět s přísudkem, nebo jsem jako podmět či přísudek vybral jiné slovo. Slovo, které mám správně, nikdy nepopisuj jako chybné. Nepoužívej žádná jiná jména větných členů než podmět a přísudek.
3. Napiš dvě až tři věty o tom, jak se v této větě správná odpověď najde (otázkou kdo nebo co a podle shody s přísudkem). Ptej se jen tak, aby otázka dávala smysl.

Pokud si myslíš, že správná odpověď je chybná, napiš to na konci jasně a vysvětli proč, abych to mohl nahlásit.
`;export{e as default};
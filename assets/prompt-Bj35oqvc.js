var e=`# AI prompt template: c-vetne-cleny

The app fills the placeholders and copies the text to the clipboard; there is no network call.
No personal data, ever. The prompt carries our verified key (one line per unit: the words, the
sentence member with its kind for příslovečné určení, the rule; přívlastek is one label without
shodný / neshodný, decision D-30), so the model explains it and does not decide on its own
which member is right. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{key}}\`,
\`{{rule}}\`, \`{{source}}\`, \`{{scoring_rules}}\`. \`{{verdict}}\` is the engine's grade of the answer; the
model must not dispute it. \`{{question}}\` shows the instruction and the sentence, \`{{user_answer}}\`
one "words – member" entry per unit, \`{{key}}\` one numbered line per unit.

---

Jsem žák 9. třídy a připravuji se na přijímací zkoušku z češtiny. V úloze mám ve větě určit větné členy.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Správná odpověď (ověřená):
{{key}}
Pravidla: {{rule}}
Zdroj: {{source}}
Hodnocení u zkoušky: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Správná odpověď je ověřená. Neměň ji a nehledej ve větě jiné větné členy. Používej jen pravidla výše, žádná jiná pravidla ani zdroje nevymýšlej a nepřidávej žádné podmínky, které tu nejsou. Piš česky, tykej mi, jednoduše a nejvýš na 150 slov. Nechval mě (žádné „výborně“ ani „gratuluji“), nic mi nevyčítej a nepoužívej emoji. Nezjišťuj, jestli jsem kluk, nebo holka.

Odpověz přesně v těchto krocích:
1. Porovnej moje odpovědi se správnými úsek po úseku. Pokud jsou všechny stejné, napiš jen, že je odpověď v pořádku, a skonči.
2. Jinak vypiš jen úseky, které mám špatně. U každého napiš správný větný člen (u příslovečného určení i druh, u přívlastku jen „přívlastek“, shodný nebo neshodný se nerozlišuje) a jeden krátký důvod přesně tak, jak je uvedený ve správné odpovědi výše. Úsek, který mám správně, nikdy nepopisuj jako chybný.
3. Napiš jednu nebo dvě věty o tom, jak si větný člen příště poznám. Použij jen pravidla uvedená výše.

Pokud si myslíš, že správná odpověď je chybná, napiš to na konci jasně a vysvětli proč, abych to mohl nahlásit.
`;export{e as default};
var e=`# AI prompt template: c-iy

The app fills the placeholders and copies the text to the clipboard; there is no network call.
No personal data, ever. The prompt carries our verified key (letter, word and reason per gap), so
the model explains it and does not decide on its own which letter is right. Placeholders:
\`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{key}}\`, \`{{rule}}\`, \`{{source}}\`,
\`{{scoring_rules}}\`. \`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.
\`{{question}}\` shows the sentence with \`…\` at every gap, \`{{user_answer}}\` the learner's letter per
gap and the sentence as the learner filled it in, \`{{key}}\` one line per gap.

---

Jsem žák 9. třídy a připravuji se na přijímací zkoušku z češtiny. V úloze mám ve větě doplnit i, nebo y.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Správná odpověď (ověřená):
{{key}}
Pravidla: {{rule}}
Zdroj: {{source}}
Hodnocení u zkoušky: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Správná odpověď je ověřená. Neměň ji a nehledej u slov jiné důvody. Používej jen pravidla výše, žádná jiná pravidla ani zdroje nevymýšlej a nepřidávej žádné podmínky, které tu nejsou. Piš česky, tykej mi, jednoduše a nejvýš na 150 slov. Nechval mě (žádné „výborně“ ani „gratuluji“), nic mi nevyčítej a nepoužívej emoji. Nezjišťuj, jestli jsem kluk, nebo holka.

Odpověz přesně v těchto krocích:
1. Porovnej moje písmena se správnými mezeru po mezeře. Pokud jsou všechna stejná, napiš jen, že je odpověď v pořádku, a skonči.
2. Jinak vypiš jen mezery, které mám špatně. U každé napiš celé správné slovo a jeden krátký důvod přesně tak, jak je uvedený ve správné odpovědi výše. Mezeru, kterou mám správně, nikdy nepopisuj jako chybnou.
3. Napiš jednu nebo dvě věty o tom, jak si u takového slova příště vzpomenu na správné písmeno. Použij jen slova a pravidla uvedená výše.

Pokud si myslíš, že správná odpověď je chybná, napiš to na konci jasně a vysvětli proč, abych to mohl nahlásit.
`;export{e as default};
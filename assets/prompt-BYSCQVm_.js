var e=`# AI prompt template (m-procenta)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
The prompt carries our verified result, so the model explains it and does not compute its own.
Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{key}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.
Tuned with the harness in \`scripts/prompt-eval/\`; results in \`docs/PROMPT_EVAL.md\`.

---

Jsem žák 9. třídy a připravuji se na přijímací zkoušku z matematiky. Nemám kalkulačku.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Správný výsledek (ověřený): {{key}}
Hodnocení u zkoušky: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Základ je vždy 100 %. Zvýšení o p % znamená násobit číslem 1 + p/100, snížení o p % číslem 1 - p/100. Když znám hodnotu po změně a hledám původní, dělím tím samým číslem. Při dvou změnách po sobě se násobí oba činitele, procenta se nesčítají. Na otázku „kolik procent“ je výsledek podíl krát 100.

Správný výsledek je ověřený. Neměň ho a nepřepočítávej ho jinak. Nepřidávej žádné požadavky, které nejsou v zadání ani v hodnocení u zkoušky (například určitý tvar zápisu). Piš česky, tykej mi, jednoduše a nejvýš na 150 slov. Nechval mě (žádné „výborně“ ani „gratuluji“), nic mi nevyčítej a nepoužívej emoji. Nezjišťuj, jestli jsem kluk, nebo holka.

Odpověz přesně v těchto krocích:
1. Porovnej moji odpověď se správným výsledkem. Pokud je to stejná hodnota, i když je zapsaná jinak (třeba s jednotkou, desetinným číslem nebo zlomkem), napiš jen, že je odpověď v pořádku, a skonči.
2. Jinak najdi, jak jsem se k svému číslu mohl dostat. Zkus jeden nebo dva jednoduché výpočty s čísly ze zadání (například jen změna místo nové hodnoty, jiný základ, sečtená procenta, odčítání místo dělení, zvýšení místo snížení, chybějící násobení stem) a ověř, že skutečně dají moje číslo. Napiš ten výpočet s čísly a řekni, v čem je špatný. Pokud žádný takový výpočet moje číslo nedá, napiš „Z tvého čísla nepoznám, kde je chyba“ (a případně že to může být chyba v počítání) a nic si nevymýšlej. Nepiš žádné úvahy ani neúspěšné pokusy, uveď jen výpočet, který sedí. Každé tvrzení musí být pravdivé; co nevíš jistě, nepiš.
3. Ukaž správný postup krok za krokem s čísly z této úlohy, tak aby vyšel správný výsledek.

Pokud si myslíš, že správný výsledek nebo zadání je chybné, napiš to na konci jasně a vysvětli proč, abych to mohl nahlásit.
`;export{e as default};
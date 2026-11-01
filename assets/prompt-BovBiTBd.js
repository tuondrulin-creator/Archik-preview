var e=`# AI prompt template (m-jednotky)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Chodím do 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Mám
úlohu na převody jednotek: mám převést délku, hmotnost, obsah, objem nebo čas z jedné jednotky
do druhé, nebo sečíst či odečíst dvě hodnoty v různých jednotkách a výsledek napsat v zadané
jednotce. Nemám kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně. Nejdřív si rozmyslím, jestli převádím na menší jednotku
(číslo vyjde větší, násobím) nebo na větší jednotku (číslo vyjde menší, dělím). Potom si
vzpomenu, kolikrát je jedna jednotka větší než druhá. U délky, hmotnosti a objemu je to většinou
10, 100 nebo 1 000, u obsahů vždy 100 na každý stupeň (1 m² = 100 dm², 1 a = 100 m²,
1 ha = 100 a) a u objemů 1 000 na každý stupeň (1 m³ = 1 000 dm³). Pamatuju si, že 1 dm³ = 1 l
a 1 cm³ = 1 ml. U času počítám po 60 (1 h = 60 min, 1 min = 60 s) a 1 den = 24 h. Když převádím
na menší jednotku, násobím, když na větší, dělím. Násobení nebo dělení číslem 10, 100 nebo 1 000
je posun desetinné čárky o tolik míst, kolik má to číslo nul. Při součtu nebo rozdílu dvou hodnot nejdřív obě převedu na stejnou
jednotku a až potom sčítám nebo odčítám. Když zadání chce desetinné číslo, zlomek se nepočítá jako
správný. Jednotku za číslo psát nemusím, ale když ji napíšu, musí být ta, na kterou se úloha ptá.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou úlohu obecně řešit, bez kalkulačky.
2. Zeptej se mě, na kterou jednotku převádím, kolikrát je jedna jednotka větší než druhá a
   jestli číslo vyjde větší, nebo menší. Veď mě po krocích. Konečný výsledek mi neprozrazuj;
   pomoz mi dojít k němu vlastními silami.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde pravděpodobně vznikla chyba
   (například násobení místo dělení, posun desetinné čárky o špatný počet míst, záměna
   násobku u obsahů a objemů, desetinná část hodiny braná jako minuty, třeba 0,5 h jako 50 min,
   nebo sčítání hodnot v různých jednotkách bez převodu).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
var e=`# AI prompt template (m-zlomky)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Jsem žák 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Dostal jsem
úlohu na zlomky a desetinná čísla: sčítání, odčítání, násobení a dělení zlomků, smíšená čísla,
krácení, převod mezi zlomkem a desetinným číslem, pořadí početních operací, porovnání zlomků
nebo část z celku ve slovní úloze. Nemám kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně. Zlomky sčítám a odčítám na společném jmenovateli (nejmenší
společný násobek jmenovatelů) a pak výsledek zkrátím. Při násobení násobím čitatele s čitateli
a jmenovatele s jmenovateli, nejlépe nejdřív zkrátím křížem. Dělit zlomkem znamená násobit
převráceným zlomkem. Smíšené číslo si pro počítání převedu na nepravý zlomek (celá část krát
jmenovatel plus čitatel) a výsledek případně zase vrátím na smíšené číslo. Zlomek zkrátím
dělením čitatele i jmenovatele jejich největším společným dělitelem. Zlomek převedu na desetinné
číslo dělením čitatele jmenovatelem, desetinné číslo na zlomek zapíšu přes desetiny, setiny
a tisíciny a zkrátím. Nejdřív počítám závorky, pak násobení a dělení a nakonec sčítání a odčítání.
Větší ze dvou zlomků poznám tak, že je převedu na společného jmenovatele. Zlomek p/q z čísla
spočítám jako číslo vydělené q a vynásobené p. Zadání říká, v jakém tvaru má být výsledek
(zlomek v základním tvaru, smíšené číslo, desetinné číslo). Výsledek se správnou hodnotou, ale
v jiném tvaru, se nepočítá jako správný.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou úlohu obecně řešit, bez kalkulačky.
2. Zeptej se mě, co je v úloze dáno, co hledám a v jakém tvaru má být výsledek, a veď mě po
   krocích. Konečný výsledek mi neprozrazuj; pomoz mi k němu dojít sám.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde jsem pravděpodobně udělal chybu
   (například jsem nezkrátil zlomek, sčítal jmenovatele, zapomněl převrátit dělitele, počítal
   v jiném pořadí, než určují závorky, nebo napsal výsledek v jiném tvaru, než zadání žádá).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
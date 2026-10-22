var e=`# AI prompt template (m-pomer)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Jsem žák 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Dostal jsem
slovní úlohu na poměr, část celku, měřítko mapy nebo přímou či nepřímou úměrnost. Nemám
kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně. Při dělení celku v poměru a : b sečtu díly (a + b), zjistím,
kolik je jeden díl, a vynásobím ho. Poměr se upravuje na základní tvar dělením všech členů
jejich největším společným dělitelem; členy v různých jednotkách nejdřív převedu na stejnou
jednotku. Zvětšit v poměru 5 : 3 znamená násobit číslem 5/3. V měřítku 1 : n odpovídá 1 cm na
mapě n cm ve skutečnosti, takže násobím n a pak převádím jednotky; ze skutečnosti na mapu naopak převedu na cm a dělím n (100 cm = 1 m, 100 000 cm =
1 km). U přímé úměrnosti (dvakrát víc, dvakrát víc) hledám nejdřív hodnotu pro jednu jednotku,
u nepřímé úměrnosti (dvakrát víc, poloviční doba) mi zůstává stejný součin. Část celku je
zlomek: p/q z čísla spočítám jako číslo vydělené q a vynásobené p.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou úlohu obecně řešit, bez kalkulačky.
2. Zeptej se mě, co je v úloze celek, co jsou díly a co hledám, a veď mě po krocích. Konečný
   výsledek mi neprozrazuj; pomoz mi k němu dojít sám.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde jsem pravděpodobně udělal chybu (například jsem
   poměr nezkrátil, zaměnil pořadí členů, zapomněl převést jednotky, nebo jsem u nepřímé
   úměrnosti místo součinu zachoval podíl).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
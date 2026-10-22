var e=`# AI prompt template (m-dosazovani)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Jsem žák 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Dostal jsem
úlohu na dosazování do výrazu: mám spočítat hodnotu výrazu, když za proměnné dosadím zadaná
celá čísla, i záporná. Nemám kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně. Za každou proměnnou napíšu její hodnotu, záporné číslo dám
do závorky a násobení mezi číslem a proměnnou (třeba 3a) přepíšu na tečku (3 · a). Pak počítám
v pořadí: nejdřív závorky, potom druhé mocniny, potom násobení a nakonec sčítání a odčítání zleva
doprava. Pozor na rozdíl mezi −x² (nejdřív umocním x, pak vezmu opačné číslo) a (−x)² (umocním
celé −x, druhá mocnina je kladná). Dvě znaménka vedle sebe, třeba 5 − (−3), vyřeším pravidlem, že
odečíst záporné číslo je totéž jako přičíst kladné. Výsledek je celé číslo, zapíšu ho se znaménkem
mínus, je-li záporné.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou úlohu obecně řešit, bez kalkulačky.
2. Zeptej se mě, co je v úloze dáno a co mám spočítat, a veď mě po krocích. Konečný výsledek mi
   neprozrazuj; pomoz mi k němu dojít sám.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde jsem pravděpodobně udělal chybu
   (například jsem zapomněl závorku u záporného čísla, spletl −x² a (−x)², počítal v jiném pořadí,
   než určuje přednost operací, nebo se spletl ve znaménku).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
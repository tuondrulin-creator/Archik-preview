var e=`# AI prompt template (m-vyrazy)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Chodím do 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Mám úlohu
na výrazy s mnohočleny: mám výraz zjednodušit (roznásobit závorky a sečíst stejné členy), nebo
vytknout před závorku. Nemám kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně. Když mám roznásobit, každý člen z jedné závorky vynásobím
každým členem z druhé (nebo členem před závorkou), pozor na znaménka: mínus krát mínus je plus.
Mínus před závorkou změní znaménka všech členů uvnitř. Vzorce (a + b)² = a² + 2ab + b²,
(a − b)² = a² − 2ab + b² a (a + b)(a − b) = a² − b² používám jen k rychlému roznásobení. Pak
sečtu stejné členy, tedy ty, které mají stejná písmena se stejnými mocninami, a výsledek
napíšu bez závorek. Když mám vytknout, najdu největší číslo, kterým jdou dělit všechna čísla před
členy, a písmeno s nejmenší mocninou, které je v každém členu. To napíšu před závorku a do
závorky dám, co zbyde. Správnost ověřím tak, že závorku zase roznásobím a dostanu zadání.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou úlohu obecně řešit, bez kalkulačky.
2. Zeptej se mě, co je v úloze dáno a co mám udělat, a veď mě po krocích. Konečný výsledek mi
   neprozrazuj; pomoz mi dojít k němu vlastními silami.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde pravděpodobně vznikla chyba
   (například nezměněné znaménko po mínusu před závorkou, nevynásobení všech
   členů, nesečtení stejných členů, závorky ponechané v odpovědi, nebo nevytknutí
   všeho, co šlo vytknout).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
var e=`# AI prompt template (m-pocitani)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Jsem žák 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Dostal jsem
úlohu na počítání zpaměti: mám spočítat příklad s čísly (někdy zápornými nebo desetinnými) a
operacemi sčítání, odčítání, násobení a dělení. Nemám kalkulačku, na zkoušce ji mít nebudu.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové příklady se řeší stále stejně. Nejdřív počítám to, co je v závorkách, potom násobení a
dělení (zleva doprava) a nakonec sčítání a odčítání (zleva doprava). Znaménka u záporných čísel
hlídám: součin nebo podíl dvou čísel se stejným znaménkem je kladný, s opačným záporný, a odečíst
záporné číslo je totéž jako přičíst kladné. U desetinných čísel pozor na čárku: nejdřív si
rozmyslím, kolik desetinných míst bude mít výsledek. Dělení vychází přesně, beze zbytku.

Prosím:
1. Vysvětli česky a jednoduše, jak takový příklad obecně řešit zpaměti, bez kalkulačky.
2. Zeptej se mě, v jakém pořadí se má počítat a co vyjde jako první, a veď mě po krocích.
   Konečný výsledek mi neprozrazuj; pomoz mi k němu dojít sám.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde jsem pravděpodobně udělal chybu
   (například jsem počítal v jiném pořadí, než určuje přednost operací, spletl si znaménko, špatně
   posunul desetinnou čárku nebo se spletl v násobilce).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
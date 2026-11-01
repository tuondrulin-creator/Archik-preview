var e=`# AI prompt template (m-rovnice)

The app fills the placeholders and copies the text to the clipboard; there is no network call.
This template deliberately has no \`{{key}}\`: the model must lead the learner to the answer, not
state it. Placeholders: \`{{question}}\`, \`{{user_answer}}\`, \`{{verdict}}\`, \`{{scoring_rules}}\`.
\`{{verdict}}\` is the engine's grade of the answer; the model must not dispute it.

---

Chodím do 9. třídy a připravuji se na jednotnou přijímací zkoušku z matematiky. Mám úlohu
na lineární rovnici s jednou neznámou: mám najít číslo, které po dosazení za neznámou splní rovnici.
Nemám kalkulačku, na zkoušce ji mít nebudu. Ve zkoušce se u rovnice hodnotí i postup, takže
potřebuju umět celý postup napsat.

Zadání: {{question}}
Moje odpověď: {{user_answer}}
Pravidla hodnocení: {{scoring_rules}}

{{verdict}} S tímhle hodnocením souhlasím na 100 %, takže ho nezpochybňuj.

Takové úlohy se řeší stále stejně, ekvivalentními úpravami. Obě strany rovnice smím vždycky stejně
upravit: přičíst nebo odečíst totéž, vynásobit nebo vydělit stejným číslem (jen ne nulou). Nejdřív
se zbavím zlomků (vynásobím celou rovnici společným jmenovatelem) a desetinných čísel (vynásobím
deseti nebo stem). Pak roznásobím závorky; mínus před závorkou změní znaménka všech členů uvnitř.
Na každé straně sečtu stejné členy. Členy s neznámou převedu na jednu stranu a čísla na druhou,
vždy tak, že to samé přičtu nebo odečtu na obou stranách. Nakonec vydělím obě strany číslem, kterým
je neznámá vynásobená; když je to číslo záporné, výsledek poznám podle znaménka. Správnost ověřím
zkouškou: výsledek dosadím do původní rovnice a levá strana se musí rovnat pravé.

Prosím:
1. Vysvětli česky a jednoduše, jak takovou rovnici obecně řešit, bez kalkulačky.
2. Zeptej se mě, co je v rovnici dáno a co mám najít, a veď mě po krocích. Konečný výsledek mi
   neprozrazuj; pomoz mi dojít k němu vlastními silami.
3. Pokud je moje odpověď podle hodnocení výše špatná, najdi, kde pravděpodobně vznikla chyba
   (například nezměněné znaménko po převodu členu na druhou stranu, nevynásobení
   všech členů společným jmenovatelem, nezměněná znaménka po mínusu před závorkou,
   nebo dělení špatným číslem).
4. Pokud si myslíš, že zadání je nejednoznačné nebo chybné, řekni to otevřeně.
`;export{e as default};
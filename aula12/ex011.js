/* exemplo condição composta
var idade = 12
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}
*/

//  exemplo condição aninhada
var idade = 22

console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Com essa idade você não vota no Brasil')
} else if ( idade <= 17 || idade > 65)   {
    // operadores logicos =+><==
    // operadores relacionais ! && || 
       console.log('Com essa idade seu voto é opcional no Brasil')
} else {
    console.log('Com essa idade seu voto é Obrigatório no Brasil')
} 
 
var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/ 
// diaSem = o
// usando switch para VALORES PONTUAIS string and number
//console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break  
    case 2:
        console.log('Terça')      
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break 
    default:
    console.log('[ERRO] Dia Inválido')
        break          
}   

var modelos = 'S4'
var modelo1 = 'Adriana'
var modelo2 = 'Juliana e Camila'
var modelo3 = 'Bruna,Geovana e Larissa'
var modelo4 = 'Catarina,Cassandra,Carlinha e Jussara'
var modelo5 = 'GUEIXA'

console.log('Bem vindo ao FortesEmoções')
console.log(`Desfrute sua noite(surpresa) inesquecível com a(s):`)
switch(modelos) {
    case 'S0':
        console.log(`Se divirta com : <strong>${modelo1}</strong> ---> (Quarto 01)`)
        break
    case 'S1':
        console.log(`Tenha emoções fortes com as divas: ${modelo2} ---> (Quarto 02)`)
        break  
    case 'S2':
        console.log(`Tenha o melhor sexo da sua vida com elas: ${modelo3} --->(Quarto 03)`) 
        break
    case 'S3':
        console.log(`Perca o controle com as devassas: ${modelo4} ---> (Quarto 04)`)
        break         
    default:
        console.log(`Tenha uma maravilhosa surpresa . passe a noite com a : ${modelo5} ---> (Quarto 05)'`)
        break
}
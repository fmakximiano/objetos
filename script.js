//1. Criar objeto que receba três propriedades sobre mim
let dados = {
    Nome: "Fernanda",Idade:"26 anos",Curso: "FrontEnd"}
console.log(dados)
//2. Adicionar nova propriedade sem alterar o objetivo inicial
dados.Modalidade="Ead-ao-vivo"
console.log(dados)
//3.Remover uma propriedade desse objeto
delete dados.Modalidade
console.log(dados)
//4. Criar um array chamada " cadastro" contendo5 objetos
let cadastro = ["Nome","Idade","Telefone","Localidade","Amigos"]
console.log(cadastro)
//5.Cada objeto deve receber as seguintes propriedades:nome,idade,telefone,amigos e//
//6.Na propriedades amigos adicionar 4 itens
let cadastro = [
    {Nome:Camila,Idade:22,Telefone:998742514,Amigos:["Thamires","Julia","Isabella","Carina","Jefferson"]}
    {Nome:Lucas,Idade:23,Telefone:987415241,Amigos:["Raisa","Fernanda","Diego","Regiane","Larissa"]}
    {Nome:Johnny,Idade:20,Telefone:998542563,Amigos:["Melissa","Fabiana","Zaqueu","Lucas","Pedro"]}
    {Nome:Ariana,Idade:27,Telefone:985421563,Amigos:["Jennifer","Gabriel","Carolina","Derick","João"]}
]
//7.Mostre no consolo o nome de um amigo de cada lista 

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[4])

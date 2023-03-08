const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Ligo de boa")
}).catch(function(erro){
    console.log("Ligo não: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//Agendamentos.sync({force: true})

Agendamentos.create({
    nome:"Robscleyso",
    endereco:"Av Ponte que caiu",
    bairro:"Dos Cria",
    cep:"666666666",
    cidade:"Acre",
    estado:"Carioca",
    observacao:"Ta funcionando"
})
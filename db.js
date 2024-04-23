const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root', 'root',{
    host: 'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(
    ()=>{
        console.log('Conectado');
    }
).catch(
    (err)=>{
        console.log('erro:'+ err.message);
    }
);

// Criar a tabela no banco de dados
//const User = sequelize.define('testando',{nome: {type: Sequelize.STRING},sobrenome: {type: Sequelize.STRING},email: {type: Sequelize.STRING}});

//User.sync({force: true}); para gravar no banco de dados 


//Para inserir dados na tabela

//User.create({ nome: "Marco",sobrenome: "Antonio",email: "testandone@gmail.com"})

// Exportando as conexao do banco de dados
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

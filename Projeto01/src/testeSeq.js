/*
* Estrutura básica de como se conectar ao servidor com o Sequelize
*/

const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "18213377", {
    hots: "localhost",
    dialect: "mysql"
});

/*
* Estrutura básica para executar e obter resposta
*/
// sequelize.authenticate().then(function() {
//     console.log("Conexão correta");
// }).catch(function(error) {
//     console.log("Erros: ", error);
// });

// Model Postagem
const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING // Limite de caractere
    },
    conteudo: {
        type: Sequelize.TEXT // Não limete de caractere
    }
});

// Model Usuario
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.TEXT
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.TEXT
    }
})

// Inserir valores na tabela
Postagem.create({
    titulo: "Fotos",
    conteudo: "Jogos e mais jogos"
})

// Usuario.sync({force: true}); // Fazer a sincronia com o model criado com uma tabela no BD
//Importando o arquivo db.js
const db = require('./db');

const Post = db.sequelize.define(
    'cadastro',
{
    titulo:{type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    idade: {type: db.Sequelize.INTEGER},
    
});

//Post.sync({force: true})
// Exportando o arquivo post.js
module.exports = Post;

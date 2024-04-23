const Express = require('express');
const app = Express();
const Hand = require('express-handlebars');
const handlebars = Hand.create({});
const body = require('body-parser');
// fazendo importação do modulo Post
const Post = require('./models/Post');

const port = 8081;
//Template
    app.engine('handlebars', Hand.engine({defaultLayout: 'C:/Users/stag.ti/Desktop/Node/appCadastro/views/layouts/main',runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }}));
    app.set('view engine', 'handlebars');

// Body-Parser
    app.use(body.urlencoded({extended: false}));
    app.use(body.json());


//Configuração de rotas
    app.get('/', function(req, res){
        Post.findAll({order:[['id','DESC']]}).then((posts)=>{
            const postData = posts.map((post => ({id: post.id, titulo: post.titulo, email:post.email,idade: post.idade})));
            res.render('C:/Users/stag.ti/Desktop/Node/appCadastro/views/layouts/home', {posts: postData});
        });
        
    });
    app.get('/cad', (req, res)=>{
        res.render('C:/Users/stag.ti/Desktop/Node/appCadastro/views/layouts/formulario');
    });
    
//Conexao do banco com o usuario 
    app.post('/add',(req, res)=>{
        Post.create({
            titulo: req.body.titulo,
            email: req.body.email,
            idade: req.body.idade
        }).then(()=>{
            res.render('C:/Users/stag.ti/Desktop/Node/appCadastro/views/layouts/sucesso');
        }).catch((err)=>{
            res.send('Houve um erro: ' + err.message);
        });

    });

//Configuração de porta do localhost
    app.listen(port, ()=>{
        console.log("Servidor rodando na porta: http://localhost:"+port);
    });

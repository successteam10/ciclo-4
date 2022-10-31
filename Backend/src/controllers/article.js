'use strict'

const article = require('../modells/article')
var Article = require('.../modells/article')
const article = require('../modells/article')

//creamos un objeto donde tengamos los métodos de ruta que vamos a definir(GET, POST, PUT, DELETE)

var controller = {

    //método para guardar un artículo: con save.
    save: (req, res)=>{
        var article = new Article();
        article.title = params.title;
        article.content = params.content;
        article.author = params.author;

        article.save((err, articleStored)=>{
            if(err || !articleStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'El artículo no se ha guardado'
                })
            }

            return res.status(200).send({
                status: 'success',
                articleStored
            });
        })
    },

    // Método para listar los artículos: get

    getArticles: (req, res)=>{
        var query = Article.find({});
    
        //con sort se organiza según el parámetro indicado:
        query.sort('-date').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status:'error',
                    message: 'Error al extraer los datos'
                });
            }
    
            if (!article){
                return res.status(404).send({
                    status:'error',
                    message: 'No hay artículos para mostrar'
                    });
            }
    
            return res.status(200).send({
                tatus: 'success',
                articles
            });
        });
    },

    // Método eliminar un artículo por id: delete.

    delete: (req, res) => {
        var articleId = req.params.id;

        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved)=>{
            if (err) {
                return res.status(500).send({
                    status:'error',
                    message: 'Error al eliminar el artículo'
                });
            }
    
            if (!article){
                return res.status(404).send({
                    status:'error',
                    message: 'No se ha encontrado el artículo a eliminar'
                    });
            }
    
            return res.status(200).send({
                tatus: 'success',
                article: articleRemoved
            });
        })
         
    }


}

module.exports = controller;
const db = require("../models");
const Article = db.articles;
const Comment = db.comments;
const Sequelize = require('sequelize');
const op = Sequelize.Op;

exports.createTutorial = (req, res) => {
    const article = {
        title: req.body.title,
        text: req.body.textContent
    };

    Article.create(article)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });


};

exports.createComment = (req, res) => {
    const comment = {
        nameCommentator: req.body.nameCommentator,
        textComment: req.body.textComment,
        articleId: req.body.articleId
    }

    Comment.create(comment)
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
        });
};

exports.findTutorialById = (req, res) => {
    Article.findByPk(req.params.id, { include: ["comments"] })
        .then(article => {
            console.log(req)
            res.send(article)
            console.log(article);
        })
        .catch((err) => {
            console.log(">> Error while finding article: ", err);
        });
};

exports.findAll = (req, res) => {
    console.log(req.query.dateOne, req.query.dateTwo)
    if(req.query.dateOne && req.query.dateTwo) {
        Article.findAll(
            {include:
                    [{as: 'comments',
                        model: Comment,
                        where: {createdAt:
                                {[op.between]:
                                        [new Date(req.query.dateOne), new Date(req.query.dateTwo) ]}}}], })
            .then(data => {
                res.send(data);
            });}
    else {
        Article.findAll({include: ['comments']})
            .then(data => {
                res.send(data);
            });
    }
};


exports.update = (req, res, next) => {
    const article = {
        title: req.body.title,
        text: req.body.text1

    };
    console.log(req)
    Article.update(article, { where:{ id: req.params.id}, returning: true})
        .then(data => {
            res.send(data)
            console.log(data);
        })
        .catch((err) => {
            console.log(">> Error while finding article: ", err);
        });
    next();
}

exports.updateComment = (req, res) => {
    const comment = {
        nameCommentator: req.body.nameCommentator,
        textComment: req.body.textComment
    };
    console.log(comment)
    Comment.update(comment, { where:{ id: req.params.id}, returning: true})
        .then(data => {
            res.send(data)
            console.log(data);
        })
        .catch((err) => {
            console.log(">> Error while finding article: ", err);
        });
}

exports.deleteArticle = (req, res) => {
    Article.destroy({where: {id: req.body.id}, returning: true})
        .then(data => {
            res.send("Cool")
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.deleteComment = (req, res) => {
    Comment.destroy({where: {id: req.body.id}, returning: true})
        .then(data =>{
            res.send("Minus comment")
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

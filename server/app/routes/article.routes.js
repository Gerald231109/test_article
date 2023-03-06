module.exports = app => {
    const articles = require("../controllers/article.controller.js");

    var router = require("express").Router();

    router.post("/", articles.createArticle);

    router.post("/:id", articles.createComment);

    router.get("/", articles.findAll);

    router.get("/:id", articles.findArticleById);

    router.patch("/:id", articles.update, articles.updateComment);

    router.delete("/", articles.deleteArticle)

    router.delete("/:id", articles.deleteComment)

    app.use('/article', router);


}
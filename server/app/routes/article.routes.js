module.exports = app => {
    const articles = require("../controllers/article.controller.js");

    var router = require("express").Router();

    router.post("/", articles.createTutorial);

    router.post("/:id", articles.createComment);

    router.get("/", articles.findAll);

    router.get("/:id", articles.findTutorialById);

    router.patch("/:id", articles.update, articles.updateComment);

    router.delete("/", articles.deleteArticle)

    router.delete("/:id", articles.deleteComment)

    app.use('/article', router);


}
module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.TEXT
        },
    })
    return Article;
};
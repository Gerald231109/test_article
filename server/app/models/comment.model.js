module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        nameCommentator: {
            type: Sequelize.STRING
        },
        textComment: {
            type: Sequelize.STRING
        },
    })
    return Comment;
};
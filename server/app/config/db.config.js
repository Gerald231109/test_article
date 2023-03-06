module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "", // Здесь должен быть ваш пароль
    DB: "test", // Здесь название БД
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

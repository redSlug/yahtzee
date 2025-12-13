require("dotenv").config();

const config = {
    schema: "./db/schema.js",
    out: "./db/migrations",
    dialect: "turso",
    dbCredentials: {
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
    },
};

module.exports = config;
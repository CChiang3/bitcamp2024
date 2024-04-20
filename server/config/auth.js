const { initAuth } = require("@propelauth/express")

module.exports = initAuth({
    authUrl: process.env.AUTH_URL,
    apiKey: process.env.API_KEY
});

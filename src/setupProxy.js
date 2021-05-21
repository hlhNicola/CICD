const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware ("/api/food-database/v2/parser", {
            target: "https://api.edamam.com",
            changeOrigin:true
        })
    )
}
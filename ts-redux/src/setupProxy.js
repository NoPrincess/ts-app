const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    console.log(proxy)
    app.use(proxy.createProxyMiddleware("/api", {
        target: "http://localhost:4001"
    }))
}
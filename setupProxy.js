const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ipinfo.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove '/api' from the request path
      },
    })
  );
};

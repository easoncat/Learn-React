const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{
      plugin: CracoLessPlugin,
      options: {
          lessLoaderOptions: {
              lessOptions: {
                  modifyVars: {
                      "@primary-color": "#008080",
                      "@font-family": `Roboto Condensed, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji'`
                  },
                  javascriptEnabled: true
              }
          }
      }
    },
    {
      plugin: require('craco-plugin-scoped-css'),
    },
    {
      plugin: require("craco-scoped-less")
    },
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4096/',
        changeOrigin:true,
        pathRewrite: {
          "^/api": ''
        },
      }
    }
  }
}
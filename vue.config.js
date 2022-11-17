module.exports = {
  configureWebpack: {
    plugins: [
      {
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false
      }
    ]
  }
};

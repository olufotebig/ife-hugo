module.exports.files = {
  javascripts: {
    joinTo: {
      "js/app.js": /^src\/js/
    }
  },
  stylesheets: {
    joinTo: {
      "css/main.css": /^src\/sass/
    }
  }
};

module.exports.modules = {
  nameCleaner: path => path.replace(/^src\/js\//, "")
};

module.exports.paths = {
  public: process.env.PUBLIC,
  watched: ["src"]
};

module.exports.plugins = {
  babel: {
    presets: [
      [
        "env",
        {
          targets: {
            browsers: ["last 2 versions", "safari >= 7"]
          }
        }
      ]
    ]
  }
};

const path = require("path");

const webpackRules = require("./rules/webpackRules.js");
const webpackPlugins = require("./plugins/webpackPlugins.js");
const constants = require("./constants/constants.js");

const WWWROOT_PATH = path.resolve(__dirname, "..", "wwwroot");
const mode = process.env.NODE_ENV;

const webpackObject = {
    mode: mode,
    entry: {
        "application-styles": "./src/scss/application-styles.scss",
        "home": "./src/js/entries/index.js",
    },
    output: {
        path: WWWROOT_PATH,
        clean: true,
    },
    module: {
        rules: [
            webpackRules.scripts(mode),
            webpackRules.styles(mode),
            webpackRules.fonts(mode),
            webpackRules.images(mode),
        ]
    },
    plugins: [
        webpackPlugins.miniCssExtract(mode),
        webpackPlugins.bundleAnalyzer(mode),
        webpackPlugins.fileManager(mode),
    ]
};

if (mode === constants.environments.production) {
    webpackObject.output.filename = 'js/[name].[contenthash].min.js';
} else if (mode === constants.environments.development) {
    webpackObject.output.filename = 'js/[name].js';

    webpackObject.devtool = "source-map";
}

module.exports = webpackObject;
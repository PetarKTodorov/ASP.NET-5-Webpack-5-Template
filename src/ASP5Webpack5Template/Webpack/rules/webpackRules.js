const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const constants = require("../constants/constants.js");

const rules = {
    "images": function initialize(mode) {
        const filename = mode === constants.environments.production ?
            "images/css/[hash][ext][query]" :
            "images/css/[name][ext][query]";

        const rules = {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
            generator: {
                filename: filename,
            }
        };

        return rules;
    },
    "fonts": function initialize(mode) {
        const filename = mode === constants.environments.production ?
            "fonts/[hash][ext][query]" :
            "fonts/[name][ext][query]";

        const rules = {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: filename
            }
        };

        return rules;
    },
    "styles": function initialize(mode) {
        const rules = {
            test: /\.(s[ac]|c)ss$/i,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                // according to the docs, sass-loader should be at the bottom, which
                // loads it first to avoid prefixes in your sourcemaps and other issues.
                "sass-loader",
            ],
        };

        return rules;
    },
    "scripts": function initialize(mode) {
        const rules = {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                // without additional settings, this will reference .babelrc
                loader: "babel-loader",
            },
        };

        return rules;
    },
};

module.exports = rules;
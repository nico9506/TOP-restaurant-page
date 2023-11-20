const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "FlatMates Project",
            favicon: "src/assets/favicon.ico",
        }),
    ],
    devtool: "inline-source-map",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                type: "asset/resource",
                // use: [
                //   {
                //     loader: 'file-loader',
                //   },
                // ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};

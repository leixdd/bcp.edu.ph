const path = require('path');

module.exports = {
    entry: './app/App.js',

    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-export-namespace-from",
                            "@babel/plugin-proposal-throw-expressions"
                        ]
                    }
                }
            }
        ]
    }
}
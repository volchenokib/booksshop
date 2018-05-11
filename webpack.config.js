const path = require('path');
const webpack = require('webpack');

const distPath = path.join(__dirname, '/public');

const config = {
    entry: {
        main: './src/client.js'
    },
    output: {
        filename: 'bundle.js',
        path: distPath
    },

    watch: true,

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env', 'stage-1']
                }
            }]
        }]
    }
};

module.exports = config;















// module.exports = {
//     entry: './src/app.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'public')
//     },
//     watch: true,
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['react', 'env', 'stage-1']
//                 }
//             }
//         ]
//     }
// }
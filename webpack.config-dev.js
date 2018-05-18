/**
 * webpack 打包；
 */

// console.log(`dev-- __dirname:`, __dirname);

// var webpack = require('webpack');

module.exports = {
    // entry: __dirname + '/components/index.tsx',
    // entry: __dirname + '/index_1.tsx',
    // entry: __dirname + '/index_2.tsx',
    // entry: __dirname + '/index_2_2.ts',
    // entry: __dirname + '/index_3.tsx',
    entry: __dirname + '/index.js',
    // entry: './index.js',
    output: {
        path: __dirname + '/dist',
        // path: './dist',
        filename: 'bundle-[name].js',
        chunkFilename: `bundle-[name]-[hash:5].js`
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            compilerOptions: {
                                module: "es2015"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};

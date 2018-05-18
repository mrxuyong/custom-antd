/**
 * webpack 打包；
 */

// console.log(`dev-- __dirname:`, __dirname);

module.exports = {
    entry: __dirname + '/src/index.tsx',
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
                                declaration: true,
                                declarationDir: "./dist",
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
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'custom-antd.js',
        path: __dirname + '/dist'
    }
};

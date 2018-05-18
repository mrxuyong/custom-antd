/**
 * webpack 打包；
 */

// console.log(`dev-- __dirname:`, __dirname);

module.exports = {
    // entry: './src/index.ts',
    // entry: __dirname + '/src/index_1.tsx',// ok
    entry: __dirname + '/src/index_2.tsx',// ok
    // entry: __dirname + '/src/index_2_2.ts',// ok
    // entry: __dirname + '/src/index_2_3.ts',// ok
    // entry: __dirname + '/src/index_2_4.ts',// ok
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
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    output: {
        filename: 'bundle-[name].js',
        path: __dirname + '/dist',
        chunkFilename: `bundle-[name]-[hash:5].js`
    }
};

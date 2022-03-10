const HtmlWebpackPlugin=require('html-webpack-plugin');//импортируем html-webpack-plugin
const MiniCssExtractPlugin=require('mini-css-extract-plugin');//импортируем mini-css-extract-plugin

let mode='development'
if(process.env.NODE_ENV ==='production'){
    mode='production';
}

module.exports={
    mode:mode,//
    output: {
        filename: "[name][contenthash].js",
        assetModuleFilename: '[path][name][ext]',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'//добавляет hach в название итоговой компиляции
        }),
        new HtmlWebpackPlugin({//для html
            template: "./src/index.html"//указывает откуда мы берем шаблон и компилирует в папку dist
        })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {

                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
        ],
    },
}

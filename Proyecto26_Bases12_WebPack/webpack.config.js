/*
	WEBPACK TIENE 4 PARTES IMPORTANTES
	-ENTRY O ENTRADA
	-OUTPUT O SALIDA
	-PLUGINS
	-LOADERS

Estas partes se definen y utilizan en el archivo de configuración
*/
const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports = {
    entry : {
        index: "./src/js/index.js",
        nosotros:"./src/js/nosotros.js"
    }, //Si se tuviesen mas archivos de entrada se mete en un array ["./src/index.js","..."]
    output : {
        filename : "[name].bundle.js",
        path : path.join(__dirname,"/dist")
    },
    devServer:{
        contentBase: path.join(__dirname,"dist"),//carpeta donde se van a servir los archivos
        compress: true,
        port: 9000
    },
    module : {
        rules : [
            {
                test : /\.js$/, //para que busque todos los archivos .js
                exclude: /node_modules/, //excluyendo la carpeta node_modules
                use: {
                    loader : "babel-loader", //babel-loader se utiliza para comunicarse con webpack
                    options : {
                        presets : ["es2015"]
                    }
                }
            },
            {
                test : /\.css$/, //para que busque todos los archivos .js
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test : /\.scss$/, //para que busque todos los archivos .js
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "all"
                }
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename:"nosotros.html",
            template:"src/nosotros.html"
        }),
    ]

}
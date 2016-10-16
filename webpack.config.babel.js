import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackNotifier from 'webpack-notifier';
import DashboardPlugin from 'webpack-dashboard/plugin';

var ENV    = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = function () {

    var config = {};

    config.entry = {
        app: './src/js/app.module.js'
    };

    config.output = {
        path: __dirname + '/build',
        publicPath: '/',
        filename: isProd ? '[name].[hash].js' : '[name].js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].js'
    };

    if (!isProd) {
        config.devtool = 'source-map';
    }

    config.module = {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint'
            }
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['ng-annotate', 'babel?presets[]=es2015'],
            exclude: /(node_modules)/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass!sass-resources?includePaths[]='
                + './node_modules')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?includePaths[]='
                + './node_modules')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'ng-cache?prefix=[dir]/[dir]',
            exclude: /(index.html)/
        }]
    };

    config.sassResources = [
        './src/assets/scss/_variables.scss',
        './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
        './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss'
    ];

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.eslint = {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: false
    };

    config.plugins = [];

    config.plugins.push(
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new DashboardPlugin(),
        new WebpackNotifier(),
        new CopyWebpackPlugin([
            { from: __dirname + '/src/assets', to: __dirname + '/build/assets' }
        ])
    );

    if (!isProd) {
        config.plugins.push(
            new ExtractTextPlugin('[name].css')
        );
    }

    if (isProd) {
        config.plugins.push(
            new ExtractTextPlugin('[name].[hash].css'),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        );
    }

    return config;
}();

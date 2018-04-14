const path                 = require('path');
const webpack              = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-nalyzer').BundleAlalyzerPlugin;
const config               = require('./gulp/config');




const NODE_ENV = process.env.NODE_ENV.trim();
const isProduction = NODE_ENV === 'production';


const webpackConfig = {
  context: path.resolve(__dirname, 'src/js'),
  entry: {
    app: './app'
  },

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
    publicPath: 'js/',
    chunkFilename: '[name].js',
    sourceMapFilename: 'sourcemaps/[file].map',
    pathinfo: !isProduction
  },

  devtool: isProduction ? false : 'cheap-inline-module-source-map',

  watch: !isProduction,
  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      vue: 'vue',
      lodash: 'lodash',
      _: 'lodash'
    }),

    new webpack.optimize.CommonsChunkPlugins({
      name: 'app',
      children: true,
      async: 'app-children-commons',
      minChunks: 2
    }),

    // new webpack.optimize.CommonsChunkPlugins({
    //   name: 'commons',
    //   minChunks: 2
    // }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    }
  }
};


if (isProduction) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}


module.exports = webpackConfig;

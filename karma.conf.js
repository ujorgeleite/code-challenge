const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    module: {
        loaders: [
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                loaders: ["css-loader", "less-loader"]
            },
            {
                test: /node_modules.*\.css$/,
                loaders: ["css-loader"]
            },
            { 
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
                loader: "url-loader" 
            },
            { test: /\.html$/, loader: "raw-loader" },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['babel-root-slash-import']
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'istanbul-instrumenter-loader',
                query: {
                    esModules: true
                }
            }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }) 
    ]
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'], 

    // list of files / patterns to load in the browser
    files: [
        './node_modules/jquery/dist/jquery.js',
        './client/compiled/vendor.js',
        './node_modules/angular/angular.js',
        './node_modules/angular-mocks/angular-mocks.js',
        './client/src/index.spec.js'
    ],

    preprocessors: {
      'client/src/index.spec.js' : ['webpack']
    },

    // list of files to exclude
    exclude: [
    ],


    webpack: webpackConfig,

    coverageIstanbulReporter: {
      reports: ['html'],
      fixWebpackSourcePaths: true,
      dir: path.join(__dirname, 'coverage-client')
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

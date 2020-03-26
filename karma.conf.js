// Karma configuration
// Generated on Thu Jun 29 2017 17:22:31 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-chai',
            'karma-typescript',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-typescript-preprocessor',
            'karma-coverage',
            'karma-typescript-es6-transform',
            'karma-junit-reporter',
            'karma-sonarqube-unit-reporter',
            'karma-summary-reporter',
            'karma-sonarqube-reporter'
        ],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'karma-typescript', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'test/*.js', 'test/*.ts', 'src/*.ts'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/*.ts': ['karma-typescript', 'coverage'],
            'test/*.spec.ts': ['karma-typescript'],
            'test/*.test.ts': ['karma-typescript']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['karma-typescript', 'mocha', 'coverage', 'junit', 'sonarqubeUnit', 'summary', 'sonarqube'],

        karmaTypescriptConfig: {
            bundlerOptions: {
                transforms: [require('karma-typescript-es6-transform')()]
            }
        },

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                "target": "ESNEXT", // Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.
                "module": "ESNext", // Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
                noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: true, // (optional) Skip resolution and preprocessing.
                removeComments: true, // (optional) Do not emit comments to output.
                concatenateOutput: false, // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
                /* Strict Type-Checking Options */
                strict: true,
                /* Enable all strict type-checking options. */
                strictNullChecks: true,
                /* Enable strict null checks. */
                noImplicitThis: true,
                /* Raise error on 'this' expressions with an implied 'any' type. */
                alwaysStrict: true,
                /* Parse in strict mode and emit "use strict" for each source file. */
                // /* Additional Checks */
                noUnusedLocals: true,
                /* Report errors on unused locals. */
                noUnusedParameters: true,
                /* Report errors on unused parameters. */
                noImplicitReturns: true,
                /* Report error when not all code paths in function return a value. */
                noFallthroughCasesInSwitch: true,
                /* Report errors for fallthrough cases in switch statement. */
                types: ['mocha', 'chai']
            },
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js')
            }
        },

        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd'
                //  expose: ['body'] // This will be exposed in a reporter as `result.mocha.body`
            }
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless', 'Firefox', 'FirefoxDeveloper', 'FirefoxNightly', 'IE'],
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],
            },
            ChromeHeadlessES6: {
                base: 'ChromeHeadless',
                flags: [''],
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        coverageReporter: {
            // specify a common output directory
            dir: 'test-reports/istanbul',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                // reporters supporting the `file` property, use `subdir` to directly
                // output them in the `dir` directory
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
                { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
                { type: 'text', subdir: '.', file: 'text.txt' },
                { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
                { type: 'json', subdir: '.', file: 'json.json' },
                { type: 'json-summary', subdir: '.', file: 'json-summary.json' },
            ]
        },
        junitReporter: {
            outputDir: 'test-reports/junit', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {}, // key value pair of properties to add to the <properties> section of the report
            xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
        },
        sonarQubeUnitReporter: {
            sonarQubeVersion: 'LATEST',
            outputDir: 'test-reports/sonarqube-unit',
            outputFile: 'test-results.xml',
            useBrowserName: true
        },
        summaryReporter: {
            outputDir: 'test-reports/sonarqube-summary',
            outputFile: 'test-results.xml',
            // 'failed', 'skipped' or 'all'
            show: 'all',
            // Limit the spec label to this length
            specLength: 50,
            // Show an 'all' column as a summary
            overviewColumn: true
        },
        sonarqubeReporter: {
            basePath: 'test', // test files folder
            filePattern: '**/*.test.ts', // test files glob pattern
            encoding: 'utf-8', // test files encoding
            outputFolder: 'test-reports/sonarqube', // report destination
            legacyMode: false, // report for Sonarqube < 6.2 (disabled)
            reportName: (metadata) => { // report name callback, accepts also a string (reportName: 'report.xml') to generate a single file
                /**
                 * Report metadata array:
                 * - metadata[0] = browser name
                 * - metadata[1] = browser version
                 * - metadata[2] = plataform name
                 * - metadata[3] = plataform version
                 */
                return metadata.concat('xml').join('.');
            }
        }
    })
}
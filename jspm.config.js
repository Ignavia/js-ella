SystemJS.config({
    paths: {
        "@ignavia/ella/": "src/"
    },
    devConfig: {
        "map": {
            "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.5.0",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.2"
        },
        "packages": {
            "npm:babel-plugin-syntax-export-extensions@6.5.0": {
                "map": {
                    "babel-runtime": "npm:babel-runtime@5.8.35"
                }
            },
            "npm:babel-plugin-transform-export-extensions@6.5.0": {
                "map": {
                    "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.5.0",
                    "babel-runtime": "npm:babel-runtime@5.8.35"
                }
            }
        }
    },
    transpiler: "plugin-babel",
    packages: {
        "@ignavia/ella": {
            "main": "ella.js",
            "format": "esm",
            "defaultExtension": "js",
            "meta": {
                "*js": {
                    "babelOptions": {
                        "plugins": [
                            "babel-plugin-transform-export-extensions"
                        ]
                    }
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "core-js": "npm:core-js@1.2.6",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    packages: {
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.5.0"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:buffer@4.5.0": {
            "map": {
                "base64-js": "npm:base64-js@1.1.1",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:readable-stream@2.0.6": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.6"
            }
        }
    }
});
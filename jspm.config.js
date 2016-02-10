SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    globalEvaluationScope: false,
    transpiler: "plugin-babel",

    map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2"
    },

    packages: {
        "@ignavia/ella": {
            "main": "ella.js",
            "format": "esm",
            "defaultExtension": "js"
        }
    }
});
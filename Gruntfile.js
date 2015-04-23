module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {},
            all: [
                "Gruntfile.js",
                "js/*.js"
            ]
        },
        bower: {
            install: {
                options: {
                    targetDir: "vendor",
                    verbose: true,
                    layout: "byComponent"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-bower-task");

    grunt.registerTask("test", ["jshint:all"]);
    grunt.registerTask("default",  ["test"]);
};

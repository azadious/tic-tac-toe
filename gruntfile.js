module.exports = function (grunt) {
    grunt.initConfig({

        watch: {
            styles: {
                files: ["sass/*"],
                tasks: ["sass"]
            },
            script: {
                //files: ["js/backbone/**/*.js","js/app.js"],
                files: ["js/app/*.js"],
                tasks: ["uglify:script"]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    require: 'susy'
                },
                files: {
                    'css/style.css': 'sass/style.sass',
                }
            }
        },

        uglify: {

            options: {
                mangle: false,
                nospawn: true
            },

            script: {
                files: {
                    'js/app.min.js' : ['js/app/*.js']
                }
            }

        }

    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("* run 'grunt dev' to start developing.");
    });

    // The dev task will be used during development
    grunt.registerTask("dev", ["sass","uglify:script","watch"]);
};

module.exports = function(grunt){

    grunt.initConfig({

        copy: {

            public: {
                expand: true,
                cwd: 'public',
                src: '**',
                dest: 'dist'
            }
        },

        clean: {

            dist: {
                src: 'dist'
            }
        },

        less: {

            compilar: {
                expand: true,
                cwd: 'public/less',
                src: ['**/*.less'],
                dest: 'public/css',
                ext: '.css'
            }
        },

        watch: {

            less: {

                options: {
                    event: ['added', 'changed']
                },

                files: 'public/less/**/*.less',
                tasks: 'less:compilar'
            }
        }

    });

    grunt.registerTask('monitoramento', ['watch']);
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('default', ['dist']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}

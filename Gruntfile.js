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

            development: {
                files: {
                    "public/css/estilos.css": "public/less/estilos.less", // Caminho dos arquivos
                    "public/css/media-queries.css": "public/less/media-queries.less" // Caminho dos arquivos
                }
            }
        },

        watch: {

            styles: {
                files: ['public/less/*.less'], // Quais arquivos o grunt ficará de olho
                tasks: ['less']
            }
        }

    });

    grunt.registerTask('default', ['less', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('jit-grunt');
}

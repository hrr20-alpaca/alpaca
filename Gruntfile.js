module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.js'
      },
      src: [
        './controllers/*.js',
        './db/*.js',
        './src/**/*.js',
        './*.js'
      ]
    },
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015', 'react']
            }]
          ],
          watch: true,
          browserifyOptions: {
            debug: true,
            insertGlobals: true
          }
        },
        src: ['src/**/*.js'],
        dest: 'public/bundle.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    shell: {
      database: {
        command: [
          'mysql.server start',
          'mysql -u root -e "create database if not exists crashcourse"'
        ].join('&&')
      }
    }

  });

  // loading modules
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('gruntify-eslint');


  // additional tasks
  grunt.registerTask('link', ['eslint', 'watch']);

  grunt.registerTask('build', ['eslint', 'browserify']);

  grunt.registerTask('default', ['build', 'concurrent:target', 'shell:database']);
};

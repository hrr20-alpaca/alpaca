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
    jshint: {
      files: ['Gruntfile.js', 'server.js', 'controllers/**/*.js', 'db/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      browserify: {
        files: ['src/**/*.js'],
        tasks: ['browserify']
      }
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
        src:
          ['src/**/*.js']
          ,
        dest: 'public/bundle.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    shell: {
      prodServer: {
        command: 'git push live master',
      },
      database: {
        command: [
          'mysql.server start',
          'mysql -u root -e "create database if not exists crashcourse"'
        ].join('&&')
      }
    }

  });

  // loading modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');


  // additional tasks
  grunt.registerTask('link', ['jshint', 'watch']);

  grunt.registerTask('build', ['browserify']);

  grunt.registerTask('default', ['build','concurrent:target', 'shell:database']);

};

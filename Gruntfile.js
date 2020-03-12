module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // qunit: {
    //   all: ['src/**/*.html']
    // },
    concat: {
      options: {
         // define a string to insert between files in the concatenated output
         separator: ';'
        },
      dist: {
         // files needs to be concatenated
         src: ['src/**/*.js'],
         // location of the concatenated output JS file
         dest: 'dist/<%= pkg.name %>.js'
        }
    },
   uglify: {
    options: {
       banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
    },
    dist: {
       files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/**/*.js'],
      // configure JSHint
      options: {
         // more options here if you want to override JSHint defaults
         globals: {
            jQuery: true,
          }
        }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-qunit');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};

module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({

clean: {
  options: {
    'no-write': true
  },
  js: ["build/*.js", "public/javascripts/*.js"],
  build: ['build'],
},
  concat: {
    js: {
      src: ['app.js', 'routes/*.js', 'public/javascripts/*.js'],
      dest: 'build/scripts.js',
    },
    css: {
      src: ['public/stylesheets/style.css', 'public/stylesheets/header.css', 'public/stylesheets/footer.css', 'public/stylesheets/login.css'],
      dest: 'build/styles.css',
    },    
  },

watch: {
  css: {
    files: ['public/stylesheets/style.css', 'public/stylesheets/header.css', 'public/stylesheets/footer.css', 'public/stylesheets/login.css'],
    tasks: ['concat'],
  },
  js: {
    files: ['app.js', 'routes/*.js', 'public/javascripts/*.js'],
    tasks: ['concat'],
  },  
},

 uglify: {
    my_target: {
      files: {
        'build/output.min.js': ['build/scripts.js'],
      }
    }
  }


});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.registerTask('default', ['concat', 'uglify', 'clean']);

};
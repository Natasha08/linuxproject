module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({


//unsure if I need 'clean'
// clean: {
//   options: {
//     'no-write': true
//   },
//   js: ['public/javascripts/*.js', '!public/javascripts/require.js'],
//   build: ['build'],
// },

// uncomment concat for development / versioning (git)

concat: {
  js: {
    src: ['app.js', 'routes/*.js', 'public/javascripts/*.js','!public/javascripts/require.js'],
    dest: 'build/scripts.js',
  },
  css: {
    src: ['public/stylesheets/style.css', 'public/stylesheets/header.css', 'public/stylesheets/footer.css', 'public/stylesheets/login.css'],
    dest: 'build/styles.css',
  },    
},

// uncomment concat for production

// concat: {
//   js: {
//     src: ['app.js', 'routes/*.js', 'public/javascripts/*.js'],
//     dest: 'build/scripts.js',
//   },
//   css: {
//     src: ['public/stylesheets/style.css', 'public/stylesheets/header.css', 'public/stylesheets/footer.css', 'public/stylesheets/login.css'],
//     dest: 'build/styles.css',
//   },    
// },
watch: {
  css: {
    files: ['public/stylesheets/style.css', 'public/stylesheets/header.css', 'public/stylesheets/footer.css', 'public/stylesheets/login.css'],
    tasks: ['concat'],
  },
  js: {
    files: ['app.js', 'routes/*.js', 'public/javascripts/*.js', '!public/javascripts/require.js'],
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


//production grunt default - select and uncomment production or dev concat above
grunt.registerTask('default', ['concat', 'uglify']);

//dev grunt - watches files, and concat/uglify files 
grunt.registerTask('dev', ['concat', 'uglify', 'watch']);

};

//working on including this as a third command. Looking for alternative to comment/uncomment solution above
//git grunt default - uncomment dev concat above
//grunt.registerTask('git', ['concat', 'uglify']);
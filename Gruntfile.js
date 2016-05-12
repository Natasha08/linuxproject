module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({

//puts all files listed except '!' in one file, designated @dest:
// uncomment concat for development / versioning (git)

concat: {
  js: {
    src: ['app.js', 'routes/*.js', 'public/javascripts/*.js','!public/javascripts/require.js', '!flightplan.js'],
    dest: 'build/scripts.js',
  },
  css: {
    src: ['public/stylesheets/*.css'],
    dest: 'build/styles.css',
  },    
},

//puts all files listed except '!' in one file, designated @dest:

// uncomment concat for production
// concat: {
//   js: {
//     src: ['app.js', 'routes/*.js', 'public/javascripts/*.js'],
//     dest: 'build/scripts.js',
//   },
//   css: {
//     src: ['public/stylesheets/*.css'],
//     dest: 'build/styles.css',
//   },    
// },
watch: {
  css: {
    files: ['public/stylesheets/*.css'],
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

//select and uncomment correct concat concat above per task
//production grunt default 
grunt.registerTask('default', ['concat', 'uglify']);

//dev build
grunt.registerTask('dev', ['concat', 'uglify', 'watch']);


//working on including this as a third command. Looking for alternative to comment/uncomment solution above
//git grunt default
grunt.registerTask('git', ['concat', 'uglify']);
};



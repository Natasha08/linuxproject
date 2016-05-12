module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({

//puts all files listed except '!' in one file, designated @dest:
// uncomment concat for DEVELOPMENT / versioning (git)

concat: {
  client_js: {
    src: ['public/javascripts/buttons.js', 'public/javascripts/buttons2.js', 'public/javascripts/buttons3.js'],
    dest: 'public/javascripts/buttonsall.js',
  },
  js: {   
    src: ['app.js', 'routes/*.js', 'public/javascripts/bundle.js'],
    dest: 'build/scripts.js',
  },
  less: {
    src: ['public/stylesheets/footer.less', 'public/stylesheets/style.less'],
    dest: 'public/stylesheets/concat.less',   
},
},
  // stripcomments: {
  //   your_target: {
  //     // Target-specific file lists and/or options go here.
  //     options: {
  //         singleline: true,
  //         multiline: true
  //     },
  //     src: ['build/styles.css'] // files to remove comments from
  //   },
  // },

//puts all files listed except '!' in one file, designated @dest:

//uncomment concat for PRODUCTION
// concat: {
//   js: {
//     src: ['app.js', 'routes/*.js', 'public/javascripts/bundle.js', 'public/javascripts/bundle2.js', 'public/javascripts/bundle3.js', 'public/javascripts/require.js'], 
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
      },
    },
  },
  cssmin: {
  target: {
    files: {
      'build/output.min.css': ['build/styles.css'],
    }
  }
}

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt.loadNpmTasks('grunt-stripcomments');

//select and uncomment correct concat concat above per task
//production grunt default 
grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

//dev build
grunt.registerTask('dev', ['concat', 'uglify','cssmin', 'watch']);


//working on including this as a third command. Looking for alternative to comment/uncomment solution above
//git grunt default
grunt.registerTask('git', ['concat', 'uglify', 'cssmin']);
};



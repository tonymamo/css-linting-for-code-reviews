module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
      csslint: {
        src: ['css/*.css']
      },
      watch: {
        files: ['css/*.css'],
        tasks: ['csslint']
      }
  });

  // Load the plugins that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['watch']);



};
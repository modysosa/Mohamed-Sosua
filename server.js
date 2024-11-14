// var StaticServer = require('static-server');
// var server = new StaticServer({
//   rootPath: '.',            // required, the root of the server file tree
//   port: 1337,               // required, the port to listen

// });
 
// import StaticServer from 'static-server';
// var server = new StaticServer({
//   rootPath: './dist',            // required, the root of the server file tree
//   port: 8000,               // required, the port to listen

// });
//  server.start(function(){
// console.log("server Started At Port", server.port)
//  });


import gulp from "gulp";
 import connect from "gulp-connect"
 gulp.task('connect', function() {
    connect.server({
        root: "./dist/",
      livereload: true
    });
  });
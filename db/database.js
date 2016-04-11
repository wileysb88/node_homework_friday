var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/shoes';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('You are connected')
})

mongoose.connection.on('error', function(er){
  console.log(err)
})

mongoose.connection.on('disconnected', function(){
  console.log('You are now disconnected')
})

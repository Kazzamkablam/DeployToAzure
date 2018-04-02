const mongoose = require ('mongoose');
const dbURL = 'mongodb://admin:password@ds012198.mlab.com:12198/koulu';

mongoose.connect(dbURL);

mongoose.connection.on ('connected', function (){
    console.log(`Mongoose connected to ${dbURL}`);
});
mongoose.connection.on ('error', function(err){
   console.log ('Mongoose connection error');
   });

mongoose.connection.on ('disconnected', function (){
   console.log ('Mongoose disconnected');
});

require ('./appSchemas');

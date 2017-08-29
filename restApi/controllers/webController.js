'use strict';

  var path = require('path');

module.exports = {

  getHomePage: function(req,res){
        //res.sendFile(path.resolve('../','webApp/controllers','index.html'));
        //res.sendFile(path.resolve('index.html'));
        res.sendfile(path.resolve('../','webApp','index.html')); 
  }




  
};

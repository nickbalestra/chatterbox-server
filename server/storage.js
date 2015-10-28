var fs = require('fs');
var _storageFile = './server/_storage.json';


exports.get = function(cb){
   fs.readFile(_storageFile, 'utf8', function(err, data){
      var storage = JSON.parse(data);
      cb(storage);
   });
};

exports.set = function(message, cb){
   fs.readFile(_storageFile, 'utf8', function(err, data){
      var storage = JSON.parse(data);
      storage.results.push(message);

      fs.writeFile(_storageFile, JSON.stringify(storage), function(){
        cb(storage);
      });

   });
};

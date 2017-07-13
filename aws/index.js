const AWS = require('aws-sdk'); 

const s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

var params = {
  Bucket: "sovereign-movie-trailers", 
  MaxKeys: 2
};

function listObjects () {
  console.log('sup')
  s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

module.exports = listObjects;
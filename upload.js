
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "<Access Key Here>",
    secretAccessKey: "<Secret Access Key Here>"
  });

var s3 = new AWS.S3();
var filePath = "./data/file.txt";


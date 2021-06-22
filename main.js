//Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//PDX-License-Identifier: MIT-0 (For details, see https://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)


const AWS = require('aws-sdk')
const dotenv = require('dotenv');
dotenv.config();
const bucket        = process.env.S3_BUCKET_NAME // the bucketname without s3://
const photo_source  = process.env.PHOTO_SOURCE
const photo_target  = process.env.PHOTO_TARGET
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

   const client = new AWS.Rekognition({region: process.env.AWS_REGION});
   const params = {
     SourceImage: {
       S3Object: {
         Bucket: bucket,
         Name: photo_source
       },
     },
     TargetImage: {
       S3Object: {
         Bucket: bucket,
         Name: photo_target
       },
     },
     SimilarityThreshold: process.env.SIMILARITY_THRESHOLD
   }
   client.compareFaces(params, function(err, response) {
     if (err) {
       console.log(err, err.stack); // an error occurred
     } else {
       response.FaceMatches.forEach(data => {
         let position   = data.Face.BoundingBox
         let similarity = data.Similarity
         console.log(`La cara en la posición: ${position.Left}, ${position.Top} coincide con un ${similarity} % de confianza`)
       })
       if(response.FaceMatches.length < 1) {
         console.log('Las imagenes no contienen caras que coincidan')
       }
      
     } // if
   });
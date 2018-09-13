const AWS = require("aws-sdk")
const s3 = new AWS.S3()

const uploader = function(bucket, key, buffer, callback) {
    s3.putObject(
        {
            Bucket: bucket,
            Key: key,
            ACL: "public-read",
            Body: buffer,
            ContentType: "application/pdf"
        },
        function(err, data) {
            if (err != null) {
                console.error("Unable to send file to S3")
                callback("Unable to send file to S3")
            } else {
                let response = {
                    statusCode: 200,
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: key,
                    isBase64Encoded: false
                }

                console.info(response)
                callback(null, response)
            }
        }
    )
}

module.exports = uploader

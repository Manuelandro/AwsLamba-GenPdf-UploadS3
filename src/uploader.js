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
            let response = {}
            if (err != null) {
                console.error("Unable to send file to S3")
                response.statusCode = 500
                response.headers = { "Content-type": "application/json" }
                return callback(response)
            }
            console.info("File uploaded")
            response.statusCode = 200
            response.headers = { "Content-type": "application/json" }
            response.body = key
            return callback(null, response)
        }
    )
}

module.exports = uploader

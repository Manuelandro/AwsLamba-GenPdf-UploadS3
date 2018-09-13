const lambdaLocal = require("lambda-local")

const jsonPayload = {
    body: {
        base64string: "your_html",
        key: "file_key",
        bucker: "your_aws_bucket_name"
    }
}

lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: "./handler.js",
    timeoutMs: 3000,
    callback: function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    }
})

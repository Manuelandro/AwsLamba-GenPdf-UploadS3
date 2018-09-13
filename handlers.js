const fs = require("fs")
const pdf = require("html-pdf")
const uploader = require("./src/uploder")

const options = {
    phantomPath: "./src/phantomjs_linux-x86_64",
    format: "A4",
    type: "pdf",
    border: {
        top: "1cm",
        bottom: "1cm"
    }
}

module.exports.handler = function(event, context, handleCallback) {
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false

    const { base64String, key, bucket } = event.body
    const fileName = `${event.body.fileName}.pdf`
 
    const buffer = new Buffer.from(base64String, "base64")
    const obj = JSON.parse(buffer)
    
    /* GENERARE PDF */
    pdf.create(result, options).toBuffer(function(err, buffer) {
      if (err) {
        console.log("There was an error generating the PDF file")
        console.log(err)
        return handleCallback(JSON.stringify(err))
      }

      // if pdf stream is ok, send it to a bucket on S3
      uploader(bucket, key, buffer, handleCallback)
       
    })
}

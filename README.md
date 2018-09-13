# AwsLamba-GenPdf-UploadS3
AWS Lambda for generate pdf from string and upload it on AWS S3


### Installation

```sh
clone this repo
$ npm install
```

### Lambda Configuration

Select all files (node_modules included) and create a .zip of them

Create a new function inside Aws -> Lambda

In the function source code select "Upload zip", then attach the zip created before and save it.

`Choose Node 8+ in runtime configuration`
`Set 1 minute in timeout configuration`
`Set concurrency based on your needs`

---

### Api Gateway Configuration

Create a new Api in Amazon API Gateway
`Anctions button -> create method -> GET`
`Set Integration type to Lambda Function`
`In function name insert the lambda created name`

---

### NOTE

If the script throws an error about "binary execution", set the correct chmod to phantomjs_linux_x86_64 


## License

MIT

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'daltonsmustache';

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


var fs = require('fs');
var filename_parameter = 2;
if (process.argv.length < filename_parameter + 1) {
	console.log("Failed to specify filename!")
	process.exit(1);
}
var secret_codes = process.argv[filename_parameter]
var raw_data = fs.readFileSync(secret_codes, "utf8");
if (raw_data.length == 0) {
	console.log("Specified data file is empty!")
}

console.log(raw_data);
console.log("... decrypts to...");
console.log(decrypt(raw_data));




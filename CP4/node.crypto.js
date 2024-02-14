// extract crypto
var crypto = require('crypto');

// create hash
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hashaaa');
var output = shasum.digest('hex');

// print
console.log('crypto_hash', output);

// declare var
var key = '안녕하세요~ 연규림입니다!';
var input = 'PASSWORD';

// cipher
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// decipher
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// print
console.log('former string: ' + input);
console.log('ciphered: ' + cipheredOutput);
console.log('deciphered: ' + decipheredOutput);

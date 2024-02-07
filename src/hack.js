const crypto = require('crypto');

const hash = '5e7d28e2cfff93edefb2d15abad07ec5';

function generateHash(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

function crackHash(targetHash) {
    const wordlist = ['password', '123456', 'qwerty', 'superhacker']; 
    for (const word of wordlist) {
        if (generateHash(word) === targetHash) {
            return word;
        }
    }
    return null;
}

const cracked = crackHash(hash);

if (cracked) {
    console.log(`Hash cracked! The password is: ${cracked}`);
} else {
    console.log('Failed to crack the hash.');
}

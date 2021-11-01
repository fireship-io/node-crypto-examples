///// Challenge /////

// Below is a hash 
// Use your hacking skills to crack it!

const hash = '5e7d28e2cfff93edefb2d15abad07ec5';

const { assert } = require('console');
var ReverseMd5 = require('reverse-md5')

function hacker(hash) {

    const rev = ReverseMd5({
        lettersUpper: true,
        lettersLower: true,
        numbers: true,
        special: true,
        whitespace: true,
        maxLen: 15
    })
    console.log('Here')
    const obj = rev(hash);
    return obj.str;
}


// When you figure it out, create a Pull Request on github with value. 
// First correct PR wins a Lifetime PRO  membership and T-shirt

///// ANSWER /////
const hacked = 'superhacker';

assert(hacker(hash) === hacked, 'You did not hack the hash!');


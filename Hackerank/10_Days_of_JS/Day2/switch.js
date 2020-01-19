let s = 'ced';

function getLetter(s) {
    switch(true) {
        case 'aeiou'.includes(s[0]):
        return 'A';
        break;

        case 'bcdfg'.includes(s[0]):
        return 'B';
        break;

        case 'hjklm'.includes(s[0]):
        return 'C';
        break;

        case 'npqrstvwxyz'.includes(s[0]):
        return 'D';
        break;
    }
}
console.log(getLetter(s));

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res=''
    
    for (let j=0;j<Math.floor(expr.length/10);j++){
        let arg='';
        for (let i=0; i<10;i++){
            arg+=expr[j*10+i];
        }
        res+=decode_symb(arg);
    }
    return res;
}
function decode_symb(arr){
    let encHalf='';
    if (arr==='**********') {return ' ';}
    for (let i=4; i>=0;i--){
        if (String(arr[i*2])+String(arr[i*2+1]) ==='10') {encHalf='.'+encHalf;}
        else if (String(arr[i*2])+String(arr[i*2+1]) ==='11') {encHalf='-'+encHalf;}
        
    }
    console.log(encHalf);
    
    for (key in MORSE_TABLE) {
        if (key===encHalf) {console.log(MORSE_TABLE[key]); return MORSE_TABLE[key];}
    }
}

module.exports = {
    decode
}
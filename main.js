let btn_start = document.getElementById("button_start");
let btn_cln   = document.getElementById("button_cln");
let result    = document.getElementById("result");
let txt_val   = document.getElementById("txt_inp");
let wordbase  = [];

const word_object = {
  'q' : 'z',
  'w' : 'x',
  'e' : 'c',
  'r' : 'v',
  't' : 'b',
  'y' : 'n',
  'u' : 'm',
  'i' : 'a',
  'o' : 's',
  'p' : 'd',
  'a' : 'i',
  's' : 'o',
  'd' : 'p',
  'f' : 'l',
  'g' : 'k',
  'h' : 'j',
  'j' : 'h',
  'k' : 'g',
  'l' : 'f',
  'z' : 'q',
  'x' : 'w',
  'c' : 'e',
  'v' : 'r',
  'b' : 't',
  'n' : 'y',
  'm' : 'u',
  '1' : '3',

  '1' : '6',
  '2' : '9',
  '3' : '7',
  '4' : '5',
  '5' : '4',
  '6' : '1',
  '7' : '3',
  '8' : '0',
  '9' : '2',
  '0' : '8',
  
  '&' : '?',
  '?' : '&',
  '$' : '%',
  '%' : '$',
  '#' : '@',
  '@' : '#',
  '!' : '^',
  '^' : '!',
  '(' : ')',
  ')' : '(',
  '{' : ']',
  ']' : '{',

  ':' : '`',
  '`' : ':',
  '+' : '=',
  '=' : '+',

  '.' : '~',
  '~' : '.',
  ',' : '/',
  '/' : ',',

  ' ' : '-',
  '-' : ' ',
  '_' : '|',
  '|' : '_',

  start() {
    wordbase.length = 0; 
    result.innerHTML = "";  
    let str = txt_val.value;

    for (i = 0; i < str.length; i++) {
      wordbase.push(str[i].toLowerCase());
    }
    wordbase.forEach((element) => result.innerHTML += word_object[element]);
  }
};

btn_cln.addEventListener("click", (e) => document.getElementById("txt_inp").value = " ");
btn_start.addEventListener("click", (e) => word_object.start());


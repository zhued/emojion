var emoji = require('node-emoji');

var string = "hello this is a dog will you come over here";
var res = string.split(" ");


parse_input();

function parse_input(){
  for (var i = 0; i < res.length; i++) {
    console.log(emoji.get(res[i]));
  }
}



// console.log(emoji.get('coffee')); // returns the emoji code for coffee (displays emoji on terminals that support it)
// console.log(emoji.which(emoji.get('coffee'))); // returns the string "coffee"
// console.log(emoji.get(':fast_forward:')); // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
// console.log(emoji.emojify('I :heart: :coffee:!')); // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"

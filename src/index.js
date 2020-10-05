const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let substr = expr.slice(i, i + 10);
    arr.push(substr);
  }

  const arrChar = arr.map((el) => {
    if (el == "**********") {
      return " ";
    }

    const arrStr = el.split("");
    let str = "";
    while (arrStr.length > 0) {
      let s = arrStr.splice(0, 2);
      if (s.join("") == "10") {
        str += ".";
      } else if (s.join("") == "11") {
        str += "-";
      }
    }
    return str;
  });

  let res = arrChar.reduce((acc, el, i) => {
    if (el in MORSE_TABLE) {
      return (acc += MORSE_TABLE[el]);
    } else {
      return (acc += " ");
    }
  }, "");

  return res;
}

module.exports = {
  decode,
};

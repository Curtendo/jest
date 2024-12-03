export function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

export function reverse(text) {
  let reverseText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  return reverseText;
}

export function Calculator() {
  return {
    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },
  };
}

export function caesarCipher(text, shift) {
  let shiftedText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {  // Check Uppercase
      ascii = ((ascii - 65 + shift) % 26) + 65;
    } else if (ascii >= 97 && ascii <= 122) {  // Check Lowercase
      ascii = ((ascii - 97 + shift) % 26) + 97;
    }

    char = String.fromCharCode(ascii);
    shiftedText += char;
  }

  return shiftedText;
}

export function analyzeArray(array) {
  let object = {
    average: null,
    min: null,
    max: null,
    length: null
  };
  
  // length
  const length = array.length;
  object.length = length;

  // average
  const totalSum = array.reduce((total, item) => {
    return total += item;
  }, 0)
  object.average = totalSum / length;

  // min and max
  const sortedArray = array.toSorted(function (a, b) { return a - b });
  object.min = sortedArray[0];
  object.max = sortedArray[length - 1];

  return object;
}

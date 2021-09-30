function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw new Error('Not the required length');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { stringLength, reverseString, capitalize };
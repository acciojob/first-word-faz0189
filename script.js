
 function firstWord(str) {
  // Trim leading and trailing whitespace
  str = str.trim();

  // Find the index of the first space
  let spaceIndex = str.indexOf(' ');

  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Return the substring from the start to the first space
  return str.substring(0, spaceIndex);
}



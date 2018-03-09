function titleCase(str) {
  let titleCaseSentenced = str.split(' ').map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();

    word = firstLetter.concat(word.slice(1, word.length));

    return word;
  });

  titleCaseSentenced = titleCaseSentenced.join(' ');

  return titleCaseSentenced;
}

console.log(titleCase('how are you today?'));
console.log(titleCase('i love to code!'));

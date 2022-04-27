export const changeWord = (string, word, newWord) => {
  const position = string.indexOf(word);
  return position === -1
    ? string
    : `${string.slice(0, position)}${newWord}${string.slice(
        position + word.length
      )}`;
};

/* Если мы не нашли слово,
    то мы возвращаем оригинальную строку, а если нашли, то мы меняем строку от 0 символа до position, вставляем наше новое слово и отрезаем,
     что осталось в конце */

// const arrayString = string.split(' ');// Мы взяли строку и сделали из неё массив слов, который разделён пробелом
//
// return arrayString.map((item)=> {
//     if( item === word) return newWord;// если слово совпадает с искомым словом, то мы возвращаем новое слово
//
//     return item;
//
//     }).join(' ');

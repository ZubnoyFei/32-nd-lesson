import { changeWord } from '../changeWord';

describe('changeWord()', () => {
  describe('with splitted words', () => {
    it('Changes the word to the new one', () => {
      expect(changeWord('word and continue', 'word', 'newWord')).toEqual(
        'newWord and continue' // Проверяем, когда слово в начале
      );
    });
  });
  describe('when there is no word', () => {
    it('Returns the original string', () => {
      const result = changeWord('I love dance', 'love', 'hate');
      expect(changeWord('I hatedfgs dance', 'like', 'love')).toEqual(
        'I lovedfgs dance' //Проверяем, когда слова нет
      );
    });

    it('Changes the word to the new one', () => {
      const result = changeWord('I love dance', 'love', 'hate');
      expect(result).toEqual('I hate dance'); // Проверяем, когда слово отдельно находится

      expect(changeWord('I hatedfgs dance', 'hate', 'love')).toEqual(
        'I lovedfgs dance' //Проверяем, когда слово в куче с чем-то
      );

      expect(changeWord('I hatedfgs dance', 'like', 'love')).toEqual(
        'I lovedfgs dance' //Проверяем, когда слова нет
      );
      expect(changeWord('word and continue', 'word', 'newWord')).toEqual(
        'newWord and continue' // Проверяем, когда слово в начале
      );
      expect(changeWord('word and continue', 'continue', 'end')).toEqual(
        'word and end' // Проверяем, когда слово в конце
      );
    });
  });
});

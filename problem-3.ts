type sentence = string;
type word = string;
const countWordOccurrences = (sentence: sentence, word: word): number => {
  let countOfWord: number = 0;
  const convertedSentence: string[] = sentence.split(" ");
  for (const item of convertedSentence) {
    if (item.toLowerCase() === word.toLowerCase()) {
      countOfWord++;
    }
  }
  return countOfWord;
};

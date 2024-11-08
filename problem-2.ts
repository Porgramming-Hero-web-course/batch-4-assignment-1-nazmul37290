const removeDuplicates = (arrOfNumbers: number[]): number[] => {
  let newArray: Array<number> = [];
  arrOfNumbers.forEach((num) => {
    if (!newArray.includes(num)) {
      newArray.push(num);
    }
  });
  return newArray;
};

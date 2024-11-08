function sumArray(numberArray: Array<number>): number {
  let sum: number = numberArray.reduce((a: number, b: number) => a + b);
  return sum;
}

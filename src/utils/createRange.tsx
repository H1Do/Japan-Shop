export default function createRange(
  startNumber: number,
  numberCount: number,
): Array<number> {
  const resultArray: Array<number> = [];
  for (let i = startNumber; i < startNumber + numberCount; i++) {
    resultArray.push(i);
  }
  return resultArray;
}

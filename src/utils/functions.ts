import { BoardSize } from "../types/Types";

const shuffleArray = (array: number[]): number[] => {
  let shuffledArray = array;
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
};

const fillArray = (array: number[]): number[] => {
  const length = array.length / 2;
  let arr1 = new Array(length).fill(0);
  let arr2 = [...arr1];
  for (let i = 0; i < length; i++) {
    arr1[i] = i + 1;
    arr2[i] = i + 1;
  }
  return arr1.concat(arr2);
};

export const generateBoardContent = (size: BoardSize): number[][] => {
  //
  let shuffledValues: number[] = new Array(size.row * size.col).fill(0);
  shuffledValues = shuffleArray(fillArray(shuffledValues));

  let shuffledArrayIndex = 0;
  let boardValues = new Array(size.row).fill("").map(() => new Array(size.col).fill(0));
  boardValues.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      boardValues[rowIndex][colIndex] = shuffledValues[shuffledArrayIndex];
      shuffledArrayIndex++;
    });
  });

  return boardValues;
};

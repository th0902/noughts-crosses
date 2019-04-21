// rowNumに合わせて、以下の配列をつくる
// [
//    [ 0, 1, 2 ],
//    [ 3, 4, 5 ],
//    ...
// ]
const createBoardSlice = rowNum => {
  return [...Array(rowNum).keys()].map(key => {
    const innerArray = [];
    const startNum = key * rowNum;
    for (let i = 0; i < rowNum; i++) {
      innerArray.push(startNum + i);
    }
    return innerArray;
  });
};

const createWinConditionList = rowNum => {
  const boards = createBoardSlice(rowNum);
  // 横の勝ちパターンはboardsと同じなのでコピーして配列を作る
  const winConditions = [...boards];

  // 縦の勝ちパターンはboardsの縦列を読み取る
  for (let i = 0; i < rowNum; i++) {
    winConditions.push(boards.map(targetRow => targetRow[i]));
  }

  // 斜めパターンは
  // 右下下がり boards[0][0], boards[1][1], ...
  // 右上上がり boards[0][LastIndex], boards[1][LastIndex - 1] ...
  {
    const downerSlash = []; // 右下下がりの対角線
    const upperSlash = []; // 右上上がりの対角線
    for (let i = 0; i < rowNum; i++) {
      downerSlash.push(boards[i][i]);
      upperSlash.push(boards[i][rowNum - (i + 1)]);
    }
    winConditions.push(downerSlash);
    winConditions.push(upperSlash);
  }
  console.log(winConditions);
  return winConditions;
};

export default createWinConditionList;

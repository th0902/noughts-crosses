export default (squares, winConditionList) => {
  //判定処理
  for (let i = 0; i < winConditionList.length; i++) {
    // 勝利条件のマスにいるプレイヤー
    const targetIndexPlayers = winConditionList[i].map(index => squares[index]);
    // null(未選択) の場合はチェック不要
    if (targetIndexPlayers[0] !== null) {
      if (targetIndexPlayers.every(x => x === targetIndexPlayers[0])) {
        // すべての記号が同じなら、そのプレイヤーの勝利
        return targetIndexPlayers[0];
      }
    }
  }
  return null;
};

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

//ここから、連続したNますを取得した時勝利、を作成
const createWinConditionList = () => {
  let select = 6;
  let winNum = 3;
  let boards = createBoardSlice(5);

  let y = boards.findIndex(function(element) {
    return element.indexOf(select) >= 0;
  });
  let x = boards[y].indexOf(select);

  let rowArray = [];
  let colArray = [];
  let downerSlashArray = [];
  let upperSlashArray = [];
  let rowCalc = true;
  let colCalc = true;
  let winConditionList = [];

  for (let i = 0; i < winNum; i++) {
    rowArray = [];
    colArray = [];
    downerSlashArray = [];
    upperSlashArray = [];
    for (let j = 0; j < winNum; j++) {
      //if (y + i + j - winNum + 1 >= 0) {
      //  rowArray.push(boards[y + i + j - winNum + 1][x]);
      //}
      //
      //if (x + i + j - winNum + 1 >= 0) {
      //  colArray.push(boards[y][x + i + j - winNum + 1]);
      //}

      console.log(y + i + j - winNum + 1);
      console.log(x + i + j - winNum + 1);
      if (y + i + j - winNum + 1 >= 0 && x + i + j - winNum + 1 >= 0) {
        downerSlashArray.push(
          boards[y + i + j - winNum + 1][x + i + j - winNum + 1]
        );
      }
      console.log(y - i - j + winNum - 1);
      console.log(x + i + j - winNum + 1);
      if (y - i - j + winNum - 1 >= 0 && x + i + j - winNum + 1 >= 0) {
        upperSlashArray.push(
          boards[y - i - j + winNum - 1][x + i + j - winNum + 1]
        );
      }
    }
    if (rowArray.length === winNum) winConditionList.push(rowArray);
    if (colArray.length === winNum) winConditionList.push(colArray);
    if (downerSlashArray.length === winNum)
      winConditionList.push(downerSlashArray);
    if (upperSlashArray.length === winNum)
      winConditionList.push(upperSlashArray);
  }
};

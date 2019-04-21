const winConditionList = rowNum => {
  const list = [];

  //縦・横の勝ちパターン
  let listRow = [];
  let listCol = [];
  for (let i = 0; i < rowNum; i++) {
    listRow = [];
    listCol = [];
    for (let j = 0; j < rowNum; j++) {
      listRow.push(j + i * rowNum);
      listCol.push(i + j * rowNum);
    }
    list.push(listRow);
    list.push(listCol);
  }

  //斜めの勝ちパターン
  let listSla1 = [];
  let listSla2 = [];
  for (let k = 0; k < rowNum; k++) {
    listSla1.push(k + k * rowNum);
    listSla2.push((k + 1) * rowNum - k - 1);
  }
  list.push(listSla1);
  list.push(listSla2);
  return list;
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

const winConditionList2 = rowNum => {
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

  return winConditions;
};

export default (squares, rowNum) => {
  // TODO : 都度計算でなく、メモ化しておくとよりよい
  const winConditions = winConditionList2(rowNum);
  //判定処理
  for (let i = 0; i < winConditions.length; i++) {
    // 勝利条件のマスにいるプレイヤー
    const targetIndexPlayers = winConditions[i].map(index => squares[index]);
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

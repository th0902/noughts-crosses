//勝ちパターンの配列を作成
export default (boardSlice, selected, winNum) => {
  //マス目の大きさを取得
  const rowNum = boardSlice.length;

  //選択されたマスの位置を取得
  const y = boardSlice.findIndex(function(element) {
    return element.indexOf(selected) >= 0;
  });
  const x = boardSlice[y].indexOf(selected);

  let rowArray = [];
  let colArray = [];
  let downerSlashArray = [];
  let upperSlashArray = [];
  const winConditionList = [];

  for (let i = 0; i < winNum; i++) {
    rowArray = [];
    colArray = [];
    downerSlashArray = [];
    upperSlashArray = [];
    for (let j = 0; j < winNum; j++) {
      //(選択したマス)-(連続してとったら勝ちなマス)-1)の位置からスタート
      let n = i + j - (winNum - 1);

      //0以上、マス目未満の場合のみ取得
      //縦のパターンはy軸に+1ずつ移動
      if (y + n >= 0 && y + n < rowNum) {
        rowArray.push(boardSlice[y + n][x]);
      }
      //横のパターンはx軸に+1ずつ移動
      if (x + n >= 0 && x + n < rowNum) {
        colArray.push(boardSlice[y][x + n]);
      }
      //右下がりのパターンはx軸に+1,y軸に+1ずつ移動
      if (y + n >= 0 && y + n < rowNum && x + n >= 0 && x + n < rowNum) {
        downerSlashArray.push(boardSlice[y + n][x + n]);
      }
      //右上がりのパターンはx軸に+1,y軸に-1ずつ移動
      if (y - n >= 0 && y - n < rowNum && x + n >= 0 && x + n < rowNum) {
        upperSlashArray.push(boardSlice[y - n][x + n]);
      }
    }
    //連続してとったら勝ちなマス以上のパターンのみプッシュ
    if (rowArray.length === winNum) winConditionList.push(rowArray);
    if (colArray.length === winNum) winConditionList.push(colArray);
    if (downerSlashArray.length === winNum)
      winConditionList.push(downerSlashArray);
    if (upperSlashArray.length === winNum)
      winConditionList.push(upperSlashArray);
  }
  return winConditionList;
};

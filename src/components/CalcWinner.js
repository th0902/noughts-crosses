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

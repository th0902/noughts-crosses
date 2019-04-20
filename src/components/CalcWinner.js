const CalcWinner = (squares,row_num) =>{
    const list = [];

    //縦・横の勝ちパターン
    let listRow = [];
    let listCol = [];
    for(let i=0;i<row_num;i++){
        listRow = [];
        listCol = [];
        for(let j=0;j<row_num;j++){
            listRow.push(j+i*row_num);
            listCol.push(i+j*row_num);
        }
        list.push(listRow)
        list.push(listCol)
    }

    //斜めの勝ちパターン
    let listSla1 = [];
    let listSla2 = [];
    for(let k=0;k<row_num;k++){
        listSla1.push(k+k*row_num);
        listSla2.push((k+1)*row_num-k-1);
    }
    list.push(listSla1);
    list.push(listSla2);

    //判定
    for (let i = 0; i < list.length; i++) {
        const squareList = []
        for(let a = 0;a < list[i].length; a++){
            squareList.push(squares[list[i][a]])
        }
        
        if (squareList.every(x => x === 'X')) {
            return 'X';
        }
        if (squareList.every(x => x === 'O')) {
            return 'O';
        }
    }
    return null;
}

export default CalcWinner;
// rowNumに合わせて、以下の配列をつくる
// [
//    [ 0, 1, 2 ],
//    [ 3, 4, 5 ],
//    ...
// ]
export default rowNum => {
  return [...Array(rowNum).keys()].map(key => {
    const innerArray = [];
    const startNum = key * rowNum;
    for (let i = 0; i < rowNum; i++) {
      innerArray.push(startNum + i);
    }
    return innerArray;
  });
};

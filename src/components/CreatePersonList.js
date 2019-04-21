// personNumに合わせて、以下の配列をつくる
// [
//    [ 0, 1, 2 ...]
// ]
const createPersonList = personNum => {
  const personList = [];
  for (let i = 0; i < personNum; i++) {
    personList.push(String(i));
  }
  return personList;
};
export default createPersonList;

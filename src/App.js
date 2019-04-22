import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component {
  state = {
    rowNum: null,
    perNum: null,
    winNum: null,
    board: [],
    personList: []
  };

  onRowSubmit = (inputRow, board, personList, winNum) => {
    this.setState({
      rowNum: inputRow,
      board: board,
      personList: personList,
      winNum: winNum
    });
  };

  render() {
    return (
      <div>
        <RowInput onSubmit={this.onRowSubmit} />
        <Game
          rowNum={this.state.rowNum}
          board={this.state.board}
          personList={this.state.personList}
          winNum={this.state.winNum}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component {
  state = {
    rowNum: null,
    perNum: null,
    winConditionList: [],
    personList: []
  };

  onRowSubmit = (inputRow, winConditionList, personList) => {
    this.setState({
      rowNum: inputRow,
      winConditionList: winConditionList,
      personList: personList
    });
  };

  render() {
    return (
      <div>
        <RowInput onSubmit={this.onRowSubmit} />
        <Game
          rowNum={this.state.rowNum}
          winConditionList={this.state.winConditionList}
          personList={this.state.personList}
        />
      </div>
    );
  }
}

export default App;

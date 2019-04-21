import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component {
  state = {
    rowNum: null,
    winConditionList: []
  };

  onRowSubmit = (inputValue, winConditionList) => {
    this.setState({
      rowNum: inputValue,
      winConditionList: winConditionList
    });
  };

  render() {
    return (
      <div>
        <RowInput onSubmit={this.onRowSubmit} />
        <Game
          rowNum={this.state.rowNum}
          winConditionList={this.state.winConditionList}
        />
      </div>
    );
  }
}

export default App;

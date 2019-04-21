import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component {
  state = {
    rowNum: null,
    inputNaN: false
  };

  onRowSubmit = inputValue => {
    if (isNaN(Number(inputValue))) {
      this.setState({
        inputNaN: true
      });
    } else {
      this.setState({
        rowNum: Number(inputValue),
        inputNaN: false
      });
    }
  };

  render() {
    return (
      <div>
        <RowInput onSubmit={this.onRowSubmit} />
        {this.state.inputNaN && <p>数字じゃないよ</p>}
        <Game rowNum={this.state.rowNum} />
      </div>
    );
  }
}

export default App;

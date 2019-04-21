import React from 'react';
import CreateWinConditionList from './CreateWinConditionList';

class RowInput extends React.Component {
  state = {
    rowNum: null,
    inputNaN: false
  };

  onInputChange = e => {
    this.setState({
      rowNum: Number(e.target.value)
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (isNaN(this.state.rowNum)) {
      this.setState({
        inputNaN: true
      });
    } else {
      this.setState({
        inputNaN: false
      });
      this.props.onSubmit(
        this.state.rowNum,
        //勝ちパターンの作成
        //数値の入力時に実行されるように変更
        CreateWinConditionList(this.state.rowNum)
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.onInputChange}
          />
        </form>
        {this.state.inputNaN && <p>数字じゃないよ</p>}
      </div>
    );
  }
}

export default RowInput;

import React from 'react';
import Board from './Board';
import CalcWinner from './CalcWinner';
import createWinConditionList from './CreateWinConditionList';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: []
        }
      ],
      winConditionList: [],
      stepNumber: 0,
      nextPerson: 0
    };
  }

  handleClick(selcted) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    //既に選択されている場合、誰かが勝利している場合はreturn
    if (CalcWinner(squares, this.state.winConditionList) || squares[selcted]) {
      return;
    }

    squares[selcted] = this.props.personList[this.state.nextPerson];
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      nextPerson: history.length % this.props.personList.length,
      //勝ちパターンの作成
      winConditionList: createWinConditionList(
        this.props.board,
        selcted,
        this.props.winNum
      )
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPerson: step % this.props.personList.length
    });
  }

  render() {
    const rowNum = this.props.rowNum;
    if (!rowNum) {
      return <div>数字を入力してください</div>;
    }
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = CalcWinner(current.squares, this.state.winConditionList);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.props.personList[this.state.nextPerson];
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onClick={selcted => this.handleClick(selcted)}
            rowNum={rowNum}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default Game;

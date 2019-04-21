import React from 'react';
import Board from './Board';
import CalcWinner from './CalcWinner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: []
        }
      ],
      stepNumber: 0,
      nextPerson: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (CalcWinner(squares, this.props.winConditionList) || squares[i]) {
      return;
    }
    squares[i] = this.props.personList[this.state.nextPerson];
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      nextPerson: history.length % this.props.personList.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextPerson: step % this.props.personList.length
    });
  }

  render() {
    const { rowNum, winConditionList } = this.props;
    if (!rowNum) {
      return <div>数字を入力してください</div>;
    }
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = CalcWinner(current.squares, winConditionList);
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
            onClick={i => this.handleClick(i)}
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

import React from 'react';
import Board from './Board';
import CalcWinner from './CalcWinner';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        history: [
            {
            squares: Array(9).fill(null)
            }
        ],
        stepNumber: 0,
        xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalcWinner(squares,this.props.row_num) || squares[i]) {
        return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
        history: history.concat([
            {
            squares: squares
            }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
        });
    }

    render() {
        console.log(this.props.row_num)

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalcWinner(current.squares,this.props.row_num);

        const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        if(Number(this.props.row_num)){
            return (
                <div className="game">
                    <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                        row_num={this.props.row_num}
                    />
                    </div>
                    <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                    </div>
                </div>
            );
        }
        return <div>数字を入力してください</div>
    }
}
export default Game;
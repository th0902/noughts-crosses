import React from 'react';
import Square from './Square';

class Board extends React.Component{
    renderBoard(row_num){
        console.log(row_num)
        const board = [];
        let board_row = [];
        for (var row=0; row < row_num; row++) {
            board_row = [];
            for (var col=0; col < row_num ; col++) {
                let i = col + row * row_num;
                board_row.push(this.renderSquare(i));
            }
            board.push(
                <div className="board-row" key={row}>{board_row}</div>
            );
        }   
        return (
        <div>
            {board}
        </div>
        );
    }

    renderSquare(i){
        return (
            <Square 
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
          <div>
            {this.renderBoard(this.props.row_num)}
          </div>
        );
    }
}

export default Board;
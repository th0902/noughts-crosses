import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderBoard(rowNum) {
    const board = [];
    let board_row = [];
    for (var row = 0; row < rowNum; row++) {
      board_row = [];
      for (var col = 0; col < rowNum; col++) {
        let i = col + row * rowNum;
        board_row.push(this.renderSquare(i));
      }
      board.push(
        <div className='board-row' key={row}>
          {board_row}
        </div>
      );
    }
    return <div>{board}</div>;
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return <div>{this.renderBoard(this.props.rowNum)}</div>;
  }
}

export default Board;

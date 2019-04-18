import React from 'react';
import Square from './Square';

class Board extends React.Component{
    renderSquare(i){
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render(){
        return(
        <div>
            <div className="board-row">
                {this.renderSquare('1-1')}
                {this.renderSquare('1-2')}
                {this.renderSquare('1-3')}
                {this.renderSquare('1-4')}
            </div>
            <div className="board-row">
                {this.renderSquare('2-1')}
                {this.renderSquare('2-2')}
                {this.renderSquare('2-3')}
                {this.renderSquare('2-4')}
            </div>
            <div className="board-row">
                {this.renderSquare('3-1')}
                {this.renderSquare('3-2')}
                {this.renderSquare('3-3')}
                {this.renderSquare('3-4')}
            </div>
            <div className="board-row">
                {this.renderSquare('4-1')}
                {this.renderSquare('4-2')}
                {this.renderSquare('4-3')}
                {this.renderSquare('4-4')}
            </div>

        </div>
        );
    }
}

export default Board;
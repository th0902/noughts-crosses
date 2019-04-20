import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component{
    state ={
        row_num: null
    }

    onRowSubmit = (row_num) =>{
        this.setState({
            row_num: row_num
        })
    }

    render(){
        return(
            <div>
                <RowInput onSubmit={this.onRowSubmit} />
                <Game row_num={this.state.row_num} />
            </div>
        );
    }
}

export default App;
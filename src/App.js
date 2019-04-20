import React from 'react';
import Game from './components/Game';
import RowInput from './components/RowInput';

class App extends React.Component{
    state ={
        rowNum: null
    }

    onRowSubmit = (inputValue) =>{
        this.setState({
            rowNum: Number(inputValue)
        })
    }

    render(){
        return(
            <div>
                <RowInput onSubmit={this.onRowSubmit} />
                <Game rowNum={this.state.rowNum} />
            </div>
        );
    }
}

export default App;

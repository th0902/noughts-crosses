import React from 'react';
import Game from './components/Game';
import Nmoku from './components/Nmoku';

class App extends React.Component{
    render(){
        return(
            <div>
                <Nmoku />
                <Game />
            </div>
        );
    }
}

export default App;
import React from 'react';

class RowInput extends React.Component{

    state ={
        rowNum: null
    };

    onInputChange = (e) =>{
        this.setState({
            rowNum: e.target.value
        });
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.rowNum);
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.onFormSubmit }>
                    <input type="text" value={this.state.text} onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}

export default RowInput;

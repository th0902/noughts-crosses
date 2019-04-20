import React from 'react';

class RowInput extends React.Component{

    state ={
        row_num: null
    };

    onInputChange = (e) =>{
        this.setState({
            row_num: e.target.value
        });
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.row_num);
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
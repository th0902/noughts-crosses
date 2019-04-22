import React from 'react';
import CreatePersonList from './CreatePersonList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateBoardSlice from './CreateBoardSlice';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class RowInput extends React.Component {
  state = {
    rowNum: null,
    personNum: null,
    winNum: null,
    inputError: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    //どれかが数値でないか、入力されていない場合にエラー
    if (
      isNaN(this.state.rowNum) ||
      isNaN(this.state.personNum) ||
      isNaN(this.state.winNum) ||
      !this.state.rowNum ||
      !this.state.personNum ||
      !this.state.winNum
    ) {
      this.setState({
        inputError: true
      });
    } else {
      this.setState({
        inputError: false
      });
      this.props.onSubmit(
        this.state.rowNum,
        //マス目の一覧作成
        CreateBoardSlice(this.state.rowNum),
        //参加者の作成
        CreatePersonList(this.state.personNum),
        this.state.winNum
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          className={classes.container}
          noValidate
          autoComplete='off'
        >
          <TextField
            label='Nマス'
            name='rowNum'
            type='text'
            onChange={this.onInputChange}
          />
          <TextField
            label='N人'
            name='personNum'
            type='text'
            onChange={this.onInputChange}
          />
          <TextField
            label='連続Nマス'
            name='winNum'
            type='text'
            onChange={this.onInputChange}
          />
          <Button type='submit' variant='contained' className={classes.button}>
            入力
          </Button>
        </form>
        {this.state.inputNaN && <p>マスか人数に数字が入ってない！</p>}
      </div>
    );
  }
}

RowInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RowInput);

import React from 'react';
import CreateWinConditionList from './CreateWinConditionList';
import CreatePersonList from './CreatePersonList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    inputError: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    //マスか参加者が数値でないか、入力されていない場合にエラー
    if (
      isNaN(this.state.rowNum) ||
      isNaN(this.state.personNum) ||
      !this.state.rowNum ||
      !this.state.personNum
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
        //勝ちパターンの作成
        //数値の入力時に実行されるように変更
        CreateWinConditionList(this.state.rowNum),
        //参加者の作成
        CreatePersonList(this.state.personNum)
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
            label='マス'
            name='rowNum'
            type='text'
            onChange={this.onInputChange}
          />
          <TextField
            label='人数'
            name='personNum'
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

import React, { Component } from 'react';
import Board from '../../components/Board';

class KanbanContainer extends Component {
  state = {
    addInput: '',
    toColumn: '0',
    taskTitle: '',
    taskDescription: '',
    board: [
      {
        title: 'To Do',
        items: []
      },
      {
        title: 'Doing',
        items: []
      },
      {
        title: 'Done',
        items: []
      }
    ]
  };

  _deepCopy = array => JSON.parse(JSON.stringify(array));

  _onAddTask = columnIdx => {
    const { taskTitle, taskDescription } = this.state;
    const board = this._deepCopy(this.state.board);

    board[columnIdx].items.push({ title: taskTitle, description: taskDescription });

    this.setState({ board, taskTitle: '', taskDescription: '' });
  };

  _onMoveTask = (columnIdx, taskIdx) => {
    const { toColumn } = this.state;
    if (parseInt(columnIdx, 10) !== parseInt(toColumn, 10)) {
      const board = this._deepCopy(this.state.board);
      const task = board[columnIdx].items[taskIdx];

      board[columnIdx].items.splice(taskIdx, 1);
      board[toColumn].items.push(task);

      this.setState({ board, toColumn: '0' });
    }
  };

  _onRemoveTask = (columnIdx, taskIdx) => {
    const board = this._deepCopy(this.state.board);
    board[columnIdx].items.splice(taskIdx, 1);
    this.setState({ board });
  };

  _onAddColumn = () => {
    const board = this.state.board.slice();
    board.push({ title: this.state.addInput, items: [] });
    this.setState({ board, addInput: '' });
  };

  _onRemoveColumn = idx => {
    const board = this.state.board.slice();
    board.splice(idx, 1);
    this.setState({ board });
  };

  render() {
    const { board } = this.state;
    return (
      <Board
        data={board}
        onAddTask={this._onAddTask}
        onRemoveTask={this._onRemoveTask}
        onMoveTask={this._onMoveTask}
        onAddColumn={this._onAddColumn}
        onRemoveColumn={this._onRemoveColumn}
        onChange={state => this.setState(state)}
      />
    );
  }
}

export default KanbanContainer;

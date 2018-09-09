import React, { Component } from 'react';
import Board from '../../components/Board';

class KanbanContainer extends Component {
  state = {
    addInput: '',
    board: [
      {
        title: 'To Do',
        itens: []
      },
      {
        title: 'Doing',
        itens: []
      },
      {
        title: 'Done',
        itens: []
      }
    ]
  };

  _onAddColumn = () => {
    const board = this.state.board.slice();
    board.push({ title: this.state.addInput, itens: [] });
    this.setState({ board, title: '' });
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
        onAddColumn={this._onAddColumn}
        onRemoveColumn={this._onRemoveColumn}
        onChange={state => this.setState(state)}
      />
    );
  }
}

export default KanbanContainer;

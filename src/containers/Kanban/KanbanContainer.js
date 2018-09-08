                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import React, { Component } from 'react';
import Board from '../../components/Board';

class KanbanContainer extends Component {
  state = {
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

  render() {
    const { board } = this.state;
    return <Board data={board}/>;
  }
}

export default KanbanContainer;

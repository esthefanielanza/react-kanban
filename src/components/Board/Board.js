import React, { Component } from 'react';
import Header from '../Header';
import { Add } from '@material-ui/icons';

import './board.scss';

const CN = 'board';

class Board extends Component {
  render() {
    return (
      <div className={CN}>
        <Header />
        <section className={`${CN}__body`}>
          <button className="button" onClick={() => console.log('Adicionar coluna')}>
            Adicionar nova coluna
            <Add className="button__icon" />
          </button>
        </section>
      </div>
    );
  }
}

export default Board;

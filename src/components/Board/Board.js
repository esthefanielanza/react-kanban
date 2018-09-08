import React, { Component, Fragment } from 'react';
import { Add } from '@material-ui/icons';
import Proptypes from 'prop-types';

import Header from '../Header';
import Column from '../Column';

import './board.scss';

const CN = 'board';

class Board extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Header />
        <div className={CN}>
          <section className={`${CN}__body`}>
            <button className="button" onClick={() => console.log('Adicionar coluna')}>
              Adicionar nova coluna
              <Add className="button__icon" />
            </button>
            <section className={`${CN}__carousel`}>
              {data.map((column, idx) => (
                <Column key={idx} {...column} />
              ))}
            </section>
          </section>
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  data: Proptypes.array.isRequired
};

export default Board;

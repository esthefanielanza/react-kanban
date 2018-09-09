import React, { Component, Fragment } from 'react';
import { Add } from '@material-ui/icons';
import Proptypes from 'prop-types';

import Header from '../Header';
import Column from '../Column';
import Modal from '../Modal';

import './board.scss';

const CN = 'board';

class Board extends Component {
  state = {
    isModalOpen: false,
    modalType: '',
    selectedItem: {}
  };

  _renderModalButtons = (confirmAction, confirmText) => (
    <div className={`${CN}__modal__button-container`}>
      <button className="button button--outlined button--large" onClick={() => this.setState({ isModalOpen: false })}>
        Cancelar
      </button>
      <button
        className="button button--large"
        onClick={() => {
          this.setState({ isModalOpen: false });
          confirmAction();
        }}
      >
        {confirmText}
      </button>
    </div>
  );

  _renderRemoveModal = (title, onRemoveColumn) => (
    <div className={`${CN}__modal__container`}>
      <div className={`${CN}__modal__header`}>
        <h2>
          Você tem certeza que deseja remover a coluna <b>"{title}"</b> ?
        </h2>
        <p> Todos os seus cards pertecentes a essa coluna também serão removidos. </p>
      </div>
      {this._renderModalButtons(onRemoveColumn, 'Remover')}
    </div>
  );

  _renderAddModal = (onAddColumn, onChange) => (
    <div className={`${CN}__modal__container`}>
      <div className={`${CN}__modal__header`}>
        <h2>Adicione uma nova coluna</h2>
        <input placeholder="Titulo" onChange={e => onChange({ addInput: e.target.value })} />
      </div>
      {this._renderModalButtons(onAddColumn, 'Adicionar')}
    </div>
  );

  render() {
    const { data, onAddColumn, onRemoveColumn, onChange } = this.props;
    const { isModalOpen, modalType, selectedItem } = this.state;

    return (
      <Fragment>
        <Header />
        <div className={CN}>
          <section className={`${CN}__body`}>
            <button className="button" onClick={() => this.setState({ isModalOpen: true, modalType: 'ADD' })}>
              Adicionar nova coluna
              <Add className="button__icon" />
            </button>
            <section className={`${CN}__carousel`}>
              {data.map((column, idx) => (
                <Column
                  key={idx}
                  onRemove={() =>
                    this.setState({ isModalOpen: true, modalType: 'REMOVE', selectedItem: { idx, ...column } })
                  }
                  {...column}
                />
              ))}
            </section>
          </section>
          <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
            {modalType === 'ADD'
              ? this._renderAddModal(onAddColumn, onChange)
              : this._renderRemoveModal(selectedItem.title, () => onRemoveColumn(selectedItem.idx))}
          </Modal>
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  data: Proptypes.array.isRequired,
  onAddColumn: Proptypes.func.isRequired,
  onRemoveColumn: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired
};

export default Board;

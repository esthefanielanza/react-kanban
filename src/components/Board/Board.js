import React, { Component, Fragment } from 'react';
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
    <div className="modal__button-container">
      <button className="button button--outlined button--large" onClick={() => this.setState({ isModalOpen: false })}>
        Cancel
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
    <div className="modal__children">
      <div className="modal__header">
        <h2>
          Are you sure that you want to remove the column <b>"{title}"</b> ?
        </h2>
        <p> All the column cards will also be removed. </p>
      </div>
      {this._renderModalButtons(onRemoveColumn, 'Remove')}
    </div>
  );

  _renderAddModal = (onAddColumn, onChange) => (
    <div className="modal__children">
      <div className="modal__header">
        <h2>Add a new Column</h2>
        <input placeholder="Title" onChange={e => onChange({ addInput: e.target.value })} />
      </div>
      {this._renderModalButtons(onAddColumn, 'Add')}
    </div>
  );

  render() {
    const { data, onAddColumn, onRemoveColumn, onChange } = this.props;
    const { isModalOpen, modalType, selectedItem } = this.state;

    return (
      <Fragment>
        <Header onAddColumn={() => this.setState({ isModalOpen: true, modalType: 'ADD' })} />
        <div className={CN}>
          <section className={`${CN}__body`}>
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

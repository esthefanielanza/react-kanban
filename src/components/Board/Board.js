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

  _handleModalContent = () => {
    const { onAddColumn, onRemoveColumn, onChange, onRemoveTask, onMoveTask, data, onAddTask } = this.props;
    const { modalType, selectedItem } = this.state;
    const columns = data.map(column => column.title);

    switch (modalType) {
      case 'REMOVE':
        return this._renderRemoveModal(selectedItem.title, () => onRemoveColumn(selectedItem.idx));
      case 'ADD':
        return this._renderAddModal(onAddColumn, onChange);
      case 'REMOVE_TASK':
        return this._renderRemoveTaskModal(selectedItem.title, () =>
          onRemoveTask(selectedItem.columnIdx, selectedItem.idx)
        );
      case 'MOVE_TASK':
        return this._renderMoveTaskModal(
          () => onMoveTask(selectedItem.columnIdx, selectedItem.idx),
          selectedItem.title,
          columns,
          onChange
        );
      case 'ADD_TASK':
        return this._renderAddTaskModal(() => onAddTask(selectedItem.idx), onChange);
      default:
        break;
    }
  };

  _renderModalButtons = (confirmAction, cancelAction, confirmText) => (
    <div className="modal__button-container">
      <button
        className="button button--outlined button--large"
        onClick={() => {
          cancelAction && cancelAction();
          this.setState({ isModalOpen: false });
        }}
      >
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
      {this._renderModalButtons(onRemoveColumn, null, 'Remove')}
    </div>
  );

  _renderRemoveTaskModal = (title, onRemoveColumn) => (
    <div className="modal__children">
      <div className="modal__header">
        <h2>
          Are you sure that you want to remove the task <b>"{title}"</b> ?
        </h2>
      </div>
      {this._renderModalButtons(onRemoveColumn, null, 'Remove')}
    </div>
  );

  _renderAddModal = (onAddColumn, onChange) => (
    <div className="modal__children">
      <div className="modal__header">
        <h2>Add a new Column</h2>
        <input placeholder="Title" onChange={e => onChange({ addInput: e.target.value })} />
      </div>
      {this._renderModalButtons(onAddColumn, () => onChange({ addInput: '' }), 'Add')}
    </div>
  );

  _renderMoveTaskModal = (onMoveTask, title, columns, onChange) => (
    <div className="modal__children">
      <div className="modal__header">
        <h2>
          Move task <b>"{title}"</b> to column:
        </h2>
        <select onChange={e => onChange({ toColumn: e.target.value })}>
          {columns.map((column, idx) => (
            <option key={idx} value={idx}>
              {column}
            </option>
          ))}
        </select>
      </div>
      {this._renderModalButtons(onMoveTask, () => onChange({ toColumn: '0' }), 'Move')}
    </div>
  );

  _renderAddTaskModal = (onAddTask, onChange) => (
    <div className="modal__children">
      <div className="modal__header">
        <h2>Add new task</h2>
        <input placeholder="Title" onChange={e => onChange({ taskTitle: e.target.value })} />
        <textarea placeholder="Description" onChange={e => onChange({ taskDescription: e.target.value })} />
      </div>
      {this._renderModalButtons(onAddTask, () => onChange({ taskDescription: '', taskTitle: '' }), 'Add')}
    </div>
  );

  render() {
    const { data } = this.props;
    const { isModalOpen } = this.state;

    return (
      <Fragment>
        <Header onAddColumn={() => this.setState({ isModalOpen: true, modalType: 'ADD' })} />
        <div className={CN}>
          <section className={`${CN}__body`}>
            <section className={`${CN}__carousel`}>
              {data.map((column, idx) => (
                <Column
                  key={idx}
                  index={idx}
                  onMoveTask={task => {
                    this.setState({
                      isModalOpen: true,
                      modalType: 'MOVE_TASK',
                      selectedItem: { columnIdx: idx, ...task }
                    });
                  }}
                  onAddTask={() => this.setState({ isModalOpen: true, modalType: 'ADD_TASK', selectedItem: { idx } })}
                  onRemoveTask={task =>
                    this.setState({
                      isModalOpen: true,
                      modalType: 'REMOVE_TASK',
                      selectedItem: { columnIdx: idx, ...task }
                    })
                  }
                  onRemove={() =>
                    this.setState({ isModalOpen: true, modalType: 'REMOVE', selectedItem: { idx, ...column } })
                  }
                  {...column}
                />
              ))}
            </section>
          </section>
          <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
            {this._handleModalContent()}
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
  onChange: Proptypes.func.isRequired,
  onRemoveTask: Proptypes.func.isRequired,
  onMoveTask: Proptypes.func.isRequired,
  onAddTask: Proptypes.func.isRequired
};

Board.defaultProps = {
  data: {},
  onAddColumn: () => {},
  onRemoveColumn: () => {},
  onChange: () => {},
  onRemoveTask: () => {},
  onMoveTask: () => {},
  onAddTask: () => {}
};

export default Board;

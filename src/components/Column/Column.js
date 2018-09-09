import React from 'react';
import Proptypes from 'prop-types';
import { Close, Add } from '@material-ui/icons';

import Card from '../Card';

import './column.scss';

const CN = 'column';

const Column = ({ title, items, onRemove }) => {
  return (
    <div className={CN}>
      <button className={`${CN}__remove`} onClick={onRemove}>
        <Close />
      </button>
      <h1 className={`${CN}__title`}>{title}</h1>
      <div className={`${CN}__body`}>
        <div className={`${CN}__items`}>
          {items.map((item, idx) => (
            <Card key={idx} index={idx} {...item} />
          ))}
        </div>
        <button className="button button--centered" onClick={() => {}}>
          Add new task
          <Add className="button__icon" />
        </button>
      </div>
    </div>
  );
};

Column.propTypes = {
  title: Proptypes.string,
  items: Proptypes.array,
  onRemove: Proptypes.func
};

Column.defaultProps = {
  title: '',
  items: [],
  onRemove: () => {}
};

export default Column;

import React from 'react';
import Proptypes from 'prop-types';

import './column.scss';

const CN = 'column';

const Column = ({ title, items }) => {
  return (
    <div className={CN}>
      <h1 className={`${CN}__title`}>{title}</h1>
    </div>
  );
};

Column.propTypes = {
  title: Proptypes.string,
  items: Proptypes.array
};

export default Column;

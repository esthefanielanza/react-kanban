import React from 'react';
import { Add } from '@material-ui/icons';
import Proptypes from 'prop-types';

import './header.scss';

const CN = 'header';

const Header = ({ onAddColumn }) => {
  return (
    <div className={CN}>
      <h1 className={`${CN}__title`}>KANBAN BOARD</h1>
      <button className="button" onClick={onAddColumn}>
        Add new column
        <Add className="button__icon" />
      </button>
    </div>
  );
};

Header.propTypes = {
  onAddColumn: Proptypes.func.isRequired
};

export default Header;

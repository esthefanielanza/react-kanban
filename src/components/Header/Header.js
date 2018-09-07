import React from 'react';

import './header.scss';

const CN = 'header';

const Header = () => {
  return (
    <div className={CN}>
      <h1 className={`${CN}__title`}>KANBAN BOARD</h1>
    </div>
  );
};

export default Header;

import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Close } from '@material-ui/icons';

import './card.scss';

const CN = 'card';

class Card extends Component {
  state = {
    hover: false
  };

  render() {
    const { title, description, onRemove, index } = this.props;
    const { hover } = this.state;
    const colors = ['#7DFF0D', '#E89F0C', '#FF0000', '#0DFFF1', '#3D0CE8'];
    const cardColor = colors[index % colors.length];
    const border = `2px solid ${cardColor}`;
    const moveButtonStyle = hover
      ? { color: 'white', backgroundColor: cardColor, border }
      : { color: cardColor, border };

    return (
      <div className={CN} style={{ border }}>
        <button className={`${CN}__remove`} style={{ color: cardColor }} onClick={onRemove}>
          <Close />
        </button>
        <h2 className={`${CN}__title`} style={{ color: cardColor }}>
          {title}
        </h2>
        <div className={`${CN}__body`}>
          <p> {description} </p>
          <button
            className="button button--outlined"
            style={moveButtonStyle}
            onMouseOver={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            Move
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
  onRemove: Proptypes.func,
  index: Proptypes.number
};

Card.defaultProps = {
  title: '',
  description: '',
  onRemove: () => {},
  index: 0
};

export default Card;

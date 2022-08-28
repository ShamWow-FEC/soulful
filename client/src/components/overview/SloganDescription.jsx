import React from 'react';
import PropTypes from 'prop-types';
import Slogan from './styles/slogandescription.styles';

function SloganDescription({ product }) {
  if (Object.keys(product).length > 0) {
    return (
      <div>
        <Slogan data-testid="slogan">{product.slogan}</Slogan>
        <br />
        <p test-data-id="description">{product.description}</p>
      </div>
    );
  }
  return null;
}

export default SloganDescription;

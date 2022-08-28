import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/features.styles';

function Features({ product }) {
  if (Object.keys(product).length > 0) {
    return (
      <Wrapper>
        {product.features.map((feature, index) => (
          feature.value !== null
            ? (
              <li key={index}>
                <span data-testid="feature-description">
                  🌟
                  &nbsp;&nbsp;
                  <span data-testid="feature" style={{ fontWeight: 'bold' }}>{feature.feature.concat(':')}</span>
                  &nbsp;
                  <span data-testid="feature-value">{feature.value}</span>
                </span>
              </li>
            )
            : (
              <li key={index}>
                <span>
                  🌟
                  &nbsp;&nbsp;
                  <span style={{ fontWeight: 'bold' }}>{feature.feature}</span>
                </span>
              </li>
            )
        ))}
      </Wrapper>
    );
  }
  return null;
}

export default Features;

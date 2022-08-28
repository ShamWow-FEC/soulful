import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { StyleSelectorGrid, ThumbnailWrapper, Thumbnail } from './styles/styleselector.styles';

function StyleSelector({
  styles, selectedStyle, setSelectedStyle, setStyleChangeButSameProduct,
}) {
  return (
    <div>
      <p>
        <strong>STYLE &gt; </strong>
        <span data-testid="selected-style-name">{selectedStyle.name ? selectedStyle.name.toUpperCase() : null}</span>
      </p>
      <StyleSelectorGrid>
        {styles.map((style) => (
          <ThumbnailWrapper key={style.style_id}>
            <BsFillCheckCircleFill className="checkmark" style={{ visibility: style.style_id === selectedStyle.style_id ? 'visible' : 'hidden' }} />
            <Thumbnail
              src={
                style.photos[0].thumbnail_url
                  ? style.photos[0].thumbnail_url
                  : 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2329&q=80'
              }
              onClick={() => {
                setSelectedStyle(style);
                setStyleChangeButSameProduct(true);
              }}
              alt={style.name}
            />
          </ThumbnailWrapper>
        ))}
      </StyleSelectorGrid>
    </div>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string,
    })),
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    })),
  })),
  selectedStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
      url: PropTypes.string,
    })),
    skus: PropTypes.objectOf(PropTypes.shape({
      quantity: PropTypes.number,
      size: PropTypes.string,
    })),
  }),
  setSelectedStyle: PropTypes.func.isRequired,
  setStyleChangeButSameProduct: PropTypes.func.isRequired,
};

StyleSelector.defaultProps = {
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.object.isRequired,
};

export default StyleSelector;

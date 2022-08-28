import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';
import Checkout from './Checkout.jsx';
import StyleSelector from './StyleSelector.jsx';
import Wrapper from './styles/sidebar.styles';

function Sidebar({
  product, selectedStyle, styles, setSelectedStyle, avgRating, totalRatings, ratingsReviewsNode,
  setStyleChangeButSameProduct,
}) {
  return (
    <Wrapper>
      <ProductInfo
        product={product}
        selectedStyle={selectedStyle}
        avgRating={avgRating}
        totalRatings={totalRatings}
        ratingsReviewsNode={ratingsReviewsNode}
      />
      <StyleSelector
        styles={styles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setStyleChangeButSameProduct={setStyleChangeButSameProduct}
      />
      <Checkout
        selectedStyle={selectedStyle}
      />
    </Wrapper>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.oneOf(['hr-rfp']),
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
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
    })
  ),
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
  avgRating: PropTypes.number,
  totalRatings: PropTypes.number,
  ratingsReviewsNode: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Sidebar.defaultProps = {
  product: PropTypes.object.isRequired,
  selectedStyle: PropTypes.object.isRequired,
  avgRating: undefined,
  totalRatings: undefined,
  ratingsReviewsNode: null,
  styles: PropTypes.array.isRequired,
};

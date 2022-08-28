import React from 'react';
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

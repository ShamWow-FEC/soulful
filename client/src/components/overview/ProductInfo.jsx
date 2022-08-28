import React from 'react';
import PropTypes from 'prop-types';
import { RiPinterestFill, RiTwitterFill, RiFacebookCircleFill } from 'react-icons/ri';
import StarRatings from 'react-star-ratings';
import { Wrapper, SocialSharingGrid, SyntheticLink } from './styles/productinfo.styles';

function ProductInfo({
  product, selectedStyle, avgRating, totalRatings, ratingsReviewsNode,
}) {
  if (Object.keys(product).length > 0 && Object.keys(selectedStyle).length > 0) {
    const formatPrice = (price) => ('$'.concat(price.slice(0, -3)));

    return (
      <Wrapper>
        {totalRatings && (
          <div>
            <StarRatings rating={avgRating} starDimension="18px" starSpacing="2px" starRatedColor="goldenrod" />
            &nbsp;
            &nbsp;
            <SyntheticLink onClick={() => {
              ratingsReviewsNode.current.scrollIntoView();
            }}
            >
              Read all&nbsp;
              {totalRatings}
              &nbsp;reviews
            </SyntheticLink>
          </div>
        )}
        <h3 data-testid="category">{product.category.toUpperCase()}</h3>
        <h1 data-testid="product-name" style={{ lineHeight: '110%' }}>{product.name}</h1>
        {selectedStyle.sale_price === null
          ? (<p data-testid="price">{formatPrice(selectedStyle.original_price)}</p>)
          : (
            <p data-testid="price">
              <span style={{ color: 'red' }}>{formatPrice(selectedStyle.sale_price)}</span>
              &nbsp;
              <span style={{ textDecorationLine: 'line-through' }}>{formatPrice(selectedStyle.original_price)}</span>
            </p>
          )}
        <SocialSharingGrid>
          {/* Share on Social Media Section */}
          <RiFacebookCircleFill className="social-sharing" />
          <RiTwitterFill className="social-sharing" />
          <RiPinterestFill className="social-sharing" />
        </SocialSharingGrid>
      </Wrapper>
    );
  }
  return null;
}

ProductInfo.propTypes = {
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
  avgRating: PropTypes.number,
  totalRatings: PropTypes.number,
  ratingsReviewsNode: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

ProductInfo.defaultProps = {
  product: PropTypes.object.isRequired,
  selectedStyle: PropTypes.object.isRequired,
  avgRating: undefined,
  totalRatings: undefined,
  ratingsReviewsNode: null,
};

export default ProductInfo;

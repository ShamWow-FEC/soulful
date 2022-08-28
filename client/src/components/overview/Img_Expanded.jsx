import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import ModalExpanded from '../../../utils/ModalExpanded.jsx';
import { Wrapper, NavSymbols, Image } from './styles/img_expanded.styles';

function ExpandedImage({
  images, currImgIndex, setExpandedView,
}) {
  const [currIndex, setCurrIndex] = useState(currImgIndex);
  const [zoom, setZoom] = useState(false);
  const [zoomImgSize, setZoomImgSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [offsetPercentage, setOffsetPercentage] = useState({ x: 0, y: 0 });
  const container = useRef(null);

  const moveBackgroundImg = (e) => {
    if (zoom) {
      const offset = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
      setContainerSize({
        width: container.current.clientWidth,
        height: container.current.clientHeight,
      });

      setOffsetPercentage({
        x: (offset.x / containerSize.width) * 100,
        y: (offset.y / containerSize.height) * 100,
      });
    }
  };

  const handleZoomClick = (e) => {
    setZoom(true);
    const imgEle = e.target;
    const {
      width: imgWidth, height: imgHeight, top: imgTop, left: imgLeft,
    } = imgEle.getBoundingClientRect();

    setZoomImgSize({
      width: imgWidth * 2.5,
      height: imgHeight * 2.5,
    });

    const offsetX = e.clientX - imgLeft;
    const offsetY = e.clientY - imgTop;

    setOffsetPercentage({
      x: (offsetX / imgWidth) * 100,
      y: (offsetY / imgHeight) * 100,
    });
  };

  const exitExpandedView = () => { setExpandedView(false); };

  if (images.length > 0) {
    return (
      <ModalExpanded cb3={exitExpandedView} zoom={zoom}>
        {images.map((image, index) => {
          if (index === currIndex) {
            return (
              <Wrapper
                ref={container}
                key={index}
                style={{
                  backgroundImage: !zoom ? 'none' : `url(${images[currIndex].url})`,
                  backgroundSize: `${zoomImgSize.width}px ${zoomImgSize.height}px`,
                  backgroundPosition: `${offsetPercentage.x}% ${offsetPercentage.y}%`,
                  cursor: zoom ? 'zoom-out' : 'default',
                }}
                onMouseMove={moveBackgroundImg}
                onClick={() => { if (zoom) { setZoom(false); } }}
              >

                {/* in zoomed-out mode */}
                {!zoom && index > 0 && (
                  <IoIosArrowDropleft
                    className="icon-expanded left-arrow-expanded"
                    onClick={() => { setCurrIndex(currIndex - 1); }}
                  />
                )}
                {!zoom && (
                  <Image
                    src={
                      images[currIndex].url
                        ? images[currIndex].url
                        : 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2329&q=80'
                    }
                    alt="A representation of this product"
                    loading="lazy"
                    onClick={handleZoomClick}
                  />
                )}
                {!zoom && (
                  <IoExitOutline data-testid="exit-expanded-btn" className="icon-expanded exit-icon" onClick={() => { setExpandedView(false); }} />
                )}
                {!zoom && index < images.length - 1 && (
                  <IoIosArrowDropright
                    className="icon-expanded right-arrow-expanded"
                    onClick={() => { setCurrIndex(currIndex + 1); }}
                  />
                )}
              </Wrapper>
            );
          }
          return null;
        })}
        <NavSymbols>
          {images.map((image, index) => {
            const circleStyle = {
              width: index === currIndex ? '11px' : '8px',
              height: index === currIndex ? '11px' : '8px',
              visibility: zoom ? 'hidden' : 'visible',
            };
            return (
              <BsCircleFill
                data-testid="nav-symbols-circles"
                className="nav-symbols-circles"
                key={index}
                style={circleStyle}
                onClick={() => {
                  if (index !== currIndex) {
                    setCurrIndex(index);
                  }
                }}
              />
            );
          })}
        </NavSymbols>
      </ModalExpanded>
    );
  }
  return null;
}

ExpandedImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  currImgIndex: PropTypes.number.isRequired,
  setExpandedView: PropTypes.func.isRequired,
};

export default ExpandedImage;

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';
import ModalExpanded from '../../../utils/ModalExpanded.jsx';

function ExpandedImage({
  images, currImgIndex, setExpandedView,
}) {
  const [currIndex, setCurrIndex] = useState(currImgIndex);
  const [zoom, setZoom] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [offsetPercentage, setOffsetPercentage] = useState({ x: 0, y: 0 });
  const container = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const getSizingRatio = (e) => {
    // const offset = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    const { width, height } = {}
    setContainerSize({
      width: container.current.clientWidth,
      height: container.current.clientHeight,
    });

    setOffsetPercentage({
      x: (offset.x / containerSize.width) * 100,
      y: (offset.y / containerSize.height) * 100,
    });
  };

  // const moveBackgroundImg = (e) => {
  //   if (zoom) {
  //     const offset = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
  //     setOffsetPercentage({
  //       x: (offset.x / containerSize.width) * 100,
  //       y: (offset.y / containerSize.height) * 100,
  //     });
  //     container.current.style.backgroundPosition = `-${offsetPercentage.x}% -${offsetPercentage.y}%`;
  //   }
  // };

  const handleZoomClick = (e) => {
    setZoom(true);
    const imgEle = e.target;
    const { width, height, top, left } = imgEle.getBoundingClientRect();
    // console.log(width, height, left, top);
    setContainerSize({
      width: width * 2.5,
      height: height * 2.5,
    });
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    setOffset({ x: offsetX, y: offsetY });
    // console.log(e.clientX, e.clientY);
    setOffsetPercentage({
      x: (offsetX / width) * 100,
      y: (offsetY / height) * 100,
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
                // onClick={!zoom ? getSizingRatio : () => { setZoom(false); }}
                style={{
                  // background: 'red',
                  backgroundImage: !zoom ? 'none' : `url(${images[currIndex].url})`,
                  backgroundSize: `${containerSize.width}px ${containerSize.height}px`,
                  backgroundPosition: `${offsetPercentage.x}% ${offsetPercentage.y}%`,
                  cursor: zoom ? 'zoom-out' : 'crosshair',
                }}
                // onMouseMove={moveBackgroundImg}
                onClick={() => { if (zoom) { setZoom(false); } }}
              >
                {/* in zoomed-in mode */}
                {/* {zoom && (
                  <ZoomedImage
                    src={
                      images[currIndex].url
                        ? images[currIndex].url
                        : 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2329&q=80'
                    }
                    alt="A representation of this product"
                  />
                )} */}

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

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  margin: auto;
  width: 60vw;
  height: 60vw;
  background-repeat: no-repeat;
  // background: red;
  justify-content: center;
  align-items: center;

  & .icon-expanded {
    position: absolute;
    z-index: 100;
    color: black;
    width: 30px;
    height: 30px;
    cursor: pointer;
  };
  & .exit-icon {
    top: 5%;
    right: 5%;
    & :hover {
      opacity: 0.4;
    }
  };
  & .left-arrow-expanded {
    top: 50%;
    left: 5%;
  };
  & .right-arrow-expanded {
    top: 50%;
    right: 5%;
  };
  @media(max-width: 500px) {
    width: 100%;
  }
  @media(min-width: 1200px) {
    width: 90%;
    height: 90%;
  }
`;

const NavSymbols = styled.div`
  display: grid;
  margin-top: 2.5vh;
  width: 100%;
  height: max-content;
  gap: 5px;
  grid-auto-flow: column;
  grid-template-rows: max-content;
  grid-auto-columns: max-content;
  justify-content: center;
  align-content: end;
  justify-items: center;
  align-items: center;
  user-select: none;
  & .nav-symbols-circles {
    fill: #D5BDAF;
    cursor: pointer;
  };
`;

const Image = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  cursor: crosshair;
`;

const ZoomedImage = styled.img`
  position: absolute;
  // width: 100%;
  // height: 100%;
  object-fit: none;
  // user-select: none;
  // cursor: crosshair;
  transform: scale(2.5);
`;

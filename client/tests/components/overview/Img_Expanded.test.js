import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import ExpandedImage from '../../../src/components/overview/Img_Expanded.jsx';
import imagesSet from './ImagesDataTest.js';

const images = imagesSet.photos;

describe('rendering Expanded View', () => {
  const setExpandedView = jest.fn();

  beforeEach(() => {
    render(<ExpandedImage
      images={images}
      currImgIndex={2}
      setExpandedView={setExpandedView}
    />);
  });

  afterEach(() => {
    cleanup();
  });

  it('displays a single image', () => {
    const photos = screen.getAllByRole('img');
    expect(photos).toHaveLength(1);
  });

  it('has no effect when the symbol representing the currently selected img is clicked on', () => {
    fireEvent(
      screen.getAllByTestId('nav-symbols-circles')[2],
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(setExpandedView).not.toHaveBeenCalled();
  });

  it('invokes once a fn that will select a new image when another symbol is clicked', () => {
    const symbols = screen.getAllByTestId('nav-symbols-circles');
    const target = symbols[0];
    fireEvent(
      target,
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(setExpandedView).not.toHaveBeenCalled();
  });

  it('invokes once a fn that will exit the expanded view when the exit btn is clicked', () => {
    fireEvent(
      screen.getByTestId('exit-expanded-btn'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(setExpandedView).toHaveBeenCalledTimes(1);
  });
});

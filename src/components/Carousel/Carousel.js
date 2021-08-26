import './Carousel.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/images/ArrowLeft.svg';
import { ReactComponent as RightArrow } from '../../assets/images/ArrowRight.svg';

const Carousel = (props) => {
  const carouselItems = props.children;

  const [selectedItem, setSelectedItem] = useState(0);
  const [position, setPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(window.innerWidth > 450 ? props.itemSize.large.w : props.itemSize.small.w);
  const [itemHeight, setItemHeight] = useState(
    window.innerWidth > 450 ? props.itemSize.large.h : props.itemSize.small.h
  );
  const [fadeStart, setFadeStart] = useState(Number.parseInt((window.innerWidth - 120) / itemWidth));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const goToNext = () => {
    if (!(selectedItem === carouselItems.length - 1)) {
      setSelectedItem((selectedItem + 1) % carouselItems.length);
      setPosition(position - itemWidth);
    }
  };

  const goToPrev = () => {
    if (selectedItem) {
      setSelectedItem(selectedItem === 0 ? carouselItems.length - 1 : selectedItem - 1);
      setPosition(position + itemWidth);
    }
  };

  useEffect(() => {
    setFadeStart(Number.parseInt((window.innerWidth - 120) / itemWidth) || 1);
    setItemWidth(window.innerWidth > 450 ? props.itemSize.large.w : props.itemSize.small.w);
    setItemHeight(window.innerWidth > 450 ? props.itemSize.large.h : props.itemSize.small.h);
    //eslint-disable-next-line
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className='carousel-component'>
      <div className='carousel-wrapper'>
        <div style={{ left: `${position}px` }} className='carousel-items'>
          {carouselItems?.map((carouselItem, idx) => {
            return (
              <div
                style={{ minWidth: `${itemWidth / 16}em`, minHeight: `${itemHeight / 16}em` }}
                className={`carousel-item ${idx >= selectedItem + fadeStart ? 'faded' : ''}`}
                key={idx}
              >
                {carouselItem}
              </div>
            );
          })}
        </div>
      </div>
      <button className='navigation-button' onClick={goToPrev}>
        <LeftArrow />
      </button>
      <button className='navigation-button' onClick={goToNext}>
        <RightArrow />
      </button>
    </div>
  );
};

export default Carousel;

import './CardItem.css';
import React from 'react';

const CardItem = (props) => {
  const { title, image, subtitles, action } = props.card;

  return (
    <div className='card-wrapper'>
      <div className='card-image-wrapper'>
        <img src={image} alt='card-img' />
      </div>
      <h3 className='title'>{title}</h3>
      {subtitles.map((subtitle, idx) => {
        return (
          <h4 key={idx} className='subtitle'>
            {subtitle}
          </h4>
        );
      })}
      <button onClick={action} className='card-button'>
        Learn More
      </button>
    </div>
  );
};

export default CardItem;

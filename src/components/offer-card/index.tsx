import { setPopupActive } from '@redux/slices/homepage';
import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IOfferCard {
  header_image: string;
  h3: string;
  blockqoute: string;
  main_image: string;
  choice_string: string;
  choice_icon: string;
  choice_color: string;
}

export const OfferCard: React.FC<IOfferCard> = ({
  blockqoute,
  h3,
  header_image,
  main_image,
  choice_color,
  choice_icon,
  choice_string,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setPopupActive(false));
  };

  return (
    <div className="offer-card hide-for-large">
      <div
        style={{ height: '100px' }}
        className="offer-card__item flex flex-ai-c"
      >
        <img src={header_image} alt="" className="offer-card__header-image" />
      </div>
      <div className="offer-card__item">
        <h3>{h3}</h3>
        <blockquote>{blockqoute}</blockquote>
      </div>
      <div style={{ height: '200px' }} className="offer-card__item">
        <img src={main_image} alt="" className="offer-card__main-image" />
      </div>
      <div className="offer-card__item">
        <Button className="button offer-card__button">SHOP NOW</Button>
      </div>
      <div className="cross" onClick={handleClose}>
        <img src="icons/cross-icon.svg" />
      </div>
      <div
        style={{ background: `${choice_color}` }}
        className="float-div flex flex-ai-c"
      >
        <img src={choice_icon} alt="" />
        <p>{choice_string}</p>
      </div>
    </div>
  );
};

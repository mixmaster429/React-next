import { setPopupActive, setOfferNumber } from '@redux/slices/homepage';
import { Button, Radio, RadioChangeEvent } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface IOfferCardSmall {
  header_image: string;
  h3: string;
  blockqoute: string;
  main_image: string;
  choice_string: string;
  choice_icon: string;
  choice_color: string;
}

export const OfferCardSmall: React.FC<IOfferCardSmall> = ({
  blockqoute,
  h3,
  header_image,
  main_image,
  choice_color,
  choice_icon,
  choice_string,
}) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const onChange = (event: RadioChangeEvent) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setOfferNumber(value));
  }, [value]);

  const handleClose = () => {
    dispatch(setPopupActive(false));
  };

  return (
    <div className="offer-card-small full flex flex-column flex-jc-c flex-ai-c">
      <div className="offer-card-small__content">
        <div></div>
        <div style={{ height: '100px' }} className="offer-card-small__item">
          <img
            src={header_image}
            alt=""
            className="offer-card-small__header-image"
          />
        </div>
        <div className="offer-card-small__item">
          <h3>{h3}</h3>
          <blockquote>{blockqoute}</blockquote>
        </div>
        <div className="offer-card-small__item main-image-container">
          <img
            src={main_image}
            alt=""
            className="offer-card-small__main-image"
          />
        </div>
        <div className="offer-card-small__item">
          <Button className="button offer-card-small__button">SHOP NOW</Button>
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
      <div className="offer-card-small__togglers">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={0} />
          <Radio value={1} />
        </Radio.Group>
      </div>
    </div>
  );
};

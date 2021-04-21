import React from 'react';

type Prop = {
  rate: {
    max: number;
    rate: number;
    text: string;
  };
};

export const Rating: React.FC<Prop> = ({ rate }) => {
  return (
    <div className="rating">
      <div className="background">
        <div
          className="rating-bar"
          style={{ width: (rate.rate * 100) / rate.max + '%' }}
        ></div>
      </div>
      <p className="rating-value">
        <hr />
        <div className="bar left"></div>
        <div className="bar right"></div>
        <span>
          {rate.text}{' '}
          <strong>
            {rate.rate}/{rate.max}
          </strong>
        </span>
      </p>
    </div>
  );
};

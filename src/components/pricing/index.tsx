import React from 'react';
import { Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

type Prop = {
  item: {
    price_type?: string;
    company_logo?: string;
    price?: number;
    color?: string;
  };
};

export const PriceCard: React.FC<Prop> = ({ item }) => {
  return (
    <div className="size-card" style={{ borderColor: item.color }}>
      <p className="title">{item.price_type}</p>
      <div className="company-logo">
        <img src={item.company_logo} alt="" />
      </div>
      <p className="price">${item.price}</p>
      <p className="description">FREE delivery & 180-night trial</p>
      <Button icon={<GlobalOutlined />}>visit website</Button>
    </div>
  );
};

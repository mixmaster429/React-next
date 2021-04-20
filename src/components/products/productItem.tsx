import React from 'react';
import { Rate, Button } from 'antd';
import { GlobalOutlined, TagOutlined } from '@ant-design/icons';

type Props = {
  item?: {
    product_image?: string;
    company_image?: string;
  };
  index?: number;
};

export const ProductItem: React.FC<Props> = ({ item, index }) => {
  return (
    <div className="product-list">
      <div className="product-image">
        <div className="product-number">#{index + 4}</div>
        <img src={item.product_image} alt="" className="product-preview" />
      </div>

      <div className="product-detail">
        <img src={item.company_image} alt="" className="company-logo" />
        <div className="description">
          <p className="title">America's Best-Priced Luxury Mattress</p>
          <p className="sale">Customer Appreciation Sale! - $200 OFF!</p>
          <p className="product-description">
            This luxury mattress provides great value for money. The Saatva
            mattress comes in three different firmness level allowing it to
            accommodate all preferences. The mattress is built out of premium
            materials, it arrives uncompressed and ready to use.
          </p>
          <span className="product-rating">Rating 9.5</span>
          <Rate disabled defaultValue={5} />
        </div>

        <div className="shipping">
          <ul>
            <li>Award winning mattress</li>
            <li>365-Night Home Trial</li>
            <li>Forever warranty</li>
            <li>Free shipping</li>
          </ul>
          <a href="#" className="show-more">
            Show more
          </a>

          <p className="actions">
            <Button type="ghost" icon={<TagOutlined />}>
              SEE DEAL
            </Button>
            <Button type="primary" icon={<GlobalOutlined />}>
              VISIT WEBSITE
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

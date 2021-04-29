import React from 'react';
import { Rate, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

interface ReviewsProps {
  number: string;
  brandImage: string;
}

export const SiteReview: React.FC<ReviewsProps> = ({ number, brandImage }) => {
  return (
    <div className="site-review">
      <img src={number} alt="number" className="number" />
      <img src={brandImage} alt="brand" />

      <div className="rating">
        <p className="rating-value">Rating 9.9</p>
        <Rate disabled defaultValue={5} />
      </div>

      <Button type="primary" icon={<GlobalOutlined />}>
        Visit website
      </Button>
    </div>
  );
};

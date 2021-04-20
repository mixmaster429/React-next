import React from 'react';
import { Rate, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

export const SiteReview: React.FC = () => {
  return (
    <div className="site-review">
      <img src="imgs/num1.png" alt="" className="number" />
      <img src="imgs/site1.png" alt="" />

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

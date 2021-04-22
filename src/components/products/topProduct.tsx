import React from 'react';
import { Col, Row, Rate } from 'antd';

type Prop = {
  item: {
    company_logo?: string;
    rating?: number;
  };
};

export const TopProduct: React.FC<Prop> = ({ item }) => {
  return (
    <div className="top-product">
      <Row>
        <Col span={12}>
          <div className="company-logo">
            <img src={item.company_logo} alt="" />
          </div>
        </Col>
        <Col span={12}>
          <div className="details">
            <div className="rate">
              <div>
                <p style={{ margin: 0 }}>Rating</p>
                <Rate disabled defaultValue={2} className="product-rate" />
              </div>
              <p className="rating-value">{item.rating}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

import React from 'react';
import { Col, Row, Rate, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

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
        <Col span={24} xl={{ span: 12 }}>
          <div className="company-logo">
            <img src={item.company_logo} alt="" />
          </div>
        </Col>
        <Col span={24} xl={{ span: 12 }}>
          <div className="details">
            <div className="rate">
              <div>
                <p style={{ margin: 0 }}>Rating</p>
                <Rate disabled defaultValue={5} className="product-rate" />
              </div>
              <p className="rating-value">{item.rating}</p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <Button type="primary" icon={<GlobalOutlined />}>
                Visit Website
              </Button>
              <p className="read-more">
                <a href="#">Read Review →</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

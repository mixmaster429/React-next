import React from 'react';
import { Rate, Button, Row, Col } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

interface ReviewsProps {
  number: string;
  brandImage: string;
}

export const SiteReview: React.FC<ReviewsProps> = ({ number, brandImage }) => {
  return (
    <div className="site-review">
      <Row align="middle">
        <Col span={3} lg={3}>
          <img src={number} alt="number" className="number" />
        </Col>
        <Col span={12} lg={11}>
          <img src={brandImage} alt="brand" className="brand" />
        </Col>
        <Col span={9} lg={10}>
          <div className="rating">
            <p className="rating-value">Rating 9.9</p>
            <Rate disabled defaultValue={5} />
            <Link href="/review">
              <a href="">
                Read Review <BiRightArrowAlt />
              </a>
            </Link>
          </div>
        </Col>
      </Row>

      <Button type="primary" icon={<GlobalOutlined />}>
        Visit website
      </Button>
    </div>
  );
};

import { Col, Row } from 'antd';
import React from 'react';

const Main: React.FC = () => {
  return (
    <>
      <section className="section-header">
        <Row>
          <Col span={22} xl={{ span: 14, offset: 3 }}>
            <p>Saatva Mattress Review</p>
          </Col>
          <Col span={22} xl={{ span: 7 }}></Col>
        </Row>
      </section>
    </>
  );
};

export default Main;

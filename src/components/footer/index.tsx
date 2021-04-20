import React from 'react';
import { Row, Col } from 'antd';
import { Contactus } from './contactus';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Contactus></Contactus>
      <div className="footer-bar">
        <Row>
          <Col
            span={24}
            xxl={{ span: 3 }}
            xl={{ span: 4 }}
            style={{ textAlign: 'center' }}
          >
            <img src="imgs/logo.png" alt="" />
          </Col>

          <Col
            span={24}
            xxl={{ span: 20, offset: 1 }}
            xl={{ span: 18, offset: 2 }}
          >
            <p>
              This website is an independent comparison site that aims to help
              consumers find the matching product for their needs. We are able
              to maintain a free service by charging an advertising fee to
              featured brands on our site. These advertising fees might impact
              the placement of the brands and scoring. We make effort to present
              up-to-date information; however, we do not compare or include all
              service providers in the market. All rights reserved @ 2019
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

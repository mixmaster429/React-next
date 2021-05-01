import React, { useState } from 'react';
import { Row, Menu, Col, Drawer } from 'antd';

import { Logo } from '@components';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <div className="container">
        <Row align="middle" className="header__content">
          <Col lg={6} xs={20}>
            <Logo />
          </Col>
          <Col lg={18} xs={4} className="hide-for-large">
            <div className="nav-links flex">
              <a className="nav-links__item">Mattresses Types</a>
              <a className="nav-links__item">Compare Price</a>
              <Link href="/review">
                <a className="nav-links__item">Reviews</a>
              </Link>
              <a className="nav-links__item">Compare Mattresses</a>
              <a className="nav-links__item">All Promo Codes</a>
            </div>
          </Col>
          <div className="hide-for-large-up">
            <img
              src="icons/close-icon.svg"
              style={{ display: visible ? 'initial' : 'none' }}
              className="icon"
              onClick={hideDrawer}
            />
            <img
              src="icons/hamburger-icon.svg"
              style={{
                display: visible ? 'none' : 'initial',
              }}
              onClick={showDrawer}
              className="icon"
            />
          </div>
        </Row>

        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          className="mobile-menu hide-for-large-up"
        >
          <Menu theme="light" mode="vertical">
            <Menu.Item key="1">Mattresses Types</Menu.Item>
            <Menu.Item key="2">Compare Prices</Menu.Item>
            <Menu.Item key="3">
              <Link href="/review">Reviews</Link>
            </Menu.Item>
            <Menu.Item key="4">Compare Mattresses</Menu.Item>
            <Menu.Item key="5">All Promo Codes</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

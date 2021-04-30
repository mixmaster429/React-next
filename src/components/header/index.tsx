import React, { useState } from 'react';
import { Row, Menu, Col, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Logo } from '@components';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">    
      <div className="container">
        <Row  align="middle">
          <Col lg={6} xs={20}>
            <Logo />
          </Col>
          <Col lg={18} xs={4}>
            <Menu mode="horizontal">
              <Menu.Item key="1">Mattresses Types</Menu.Item>
              <Menu.Item key="2">Compare Prices</Menu.Item>
              <Menu.Item key="3">
                <Link href="/review">Reviews</Link>
              </Menu.Item>
              <Menu.Item key="4">Compare Mattresses</Menu.Item>
              <Menu.Item key="5">All Promo Codes</Menu.Item>
            </Menu>
          </Col>
        </Row>

        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          className="mobile-menu"
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

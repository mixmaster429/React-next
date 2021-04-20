import React, { useState } from 'react';
import { Row, Menu, Col, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Logo } from '@components';

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
      <Row style={{ width: '100%' }}>
        <Col span={20} offset={2}>
          <div className="navbar">
            <Logo />

            <Menu theme="light" mode="horizontal">
              <Menu.Item key="1">Mattresses Types</Menu.Item>
              <Menu.Item key="2">Compare Prices</Menu.Item>
              <Menu.Item key="3">Reviews</Menu.Item>
              <Menu.Item key="4">Compare Mattresses</Menu.Item>
              <Menu.Item key="5">All Promo Codes</Menu.Item>
            </Menu>

            <div className="mobile-menu-toggle">
              <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
            </div>
          </div>
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
          <Menu.Item key="3">Reviews</Menu.Item>
          <Menu.Item key="4">Compare Mattresses</Menu.Item>
          <Menu.Item key="5">All Promo Codes</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

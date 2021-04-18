import React from "react";
import { Row, Menu, Col } from "antd";
import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Row style={{ width: "100%" }}>
        <Col xl={{ span: 20, offset: 2 }}>
          <div className="navbar">
            <Logo />

            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">Mattresses Types</Menu.Item>
              <Menu.Item key="2">Compare Prices</Menu.Item>
              <Menu.Item key="3">Reviews</Menu.Item>
              <Menu.Item key="4">Compare Mattresses</Menu.Item>
              <Menu.Item key="5">All Promo Codes</Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    </div>
  );
};

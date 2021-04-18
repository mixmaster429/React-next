import React from "react";

import { Header } from "@components";
import { Row, Col, Rate, Button, Tabs, TabPane } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const Home: React.FC = () => {
  const { TabPane } = Tabs;

  return (
    <div className="homepage">
      <Header />

      <section className="top-section">
        <div className="text-wrapper">
          <h1>TOP 10 Best Mattresses April 2021</h1>

          <p className="description">
            You will spend a third of your life on a mattress. MattressVerdict
            is here to help you make a better choice when buying an online
            mattress. We provide detailed reviews of the best rated mattresses
            in 2021.
          </p>

          <p className="details">
            Advertising Disclosure: We receive referral fees from the brands
            listed below.
            <a href="#">Full Disclosure</a>
          </p>

          <img src="imgs/default.png" alt="" />
        </div>
      </section>

      <section className="site-reviews">
        <Row>
          <Col xl={{ span: 20, offset: 2 }}>
            <Row justify="space-between">
              <Col span={7}>
                <div className="site-review">
                  <img src="imgs/num1.png" alt="" />
                  <img src="imgs/site1.png" alt="" />

                  <div className="rating">
                    <p className="rating-value">Rating 9.9</p>
                    <Rate disabled defaultValue={5} />
                  </div>

                  <Button type="primary" icon={<GlobalOutlined />}>
                    Visit website
                  </Button>
                </div>
              </Col>

              <Col span={7}>
                <div className="site-review">
                  <img src="imgs/num2.png" alt="" />
                  <img src="imgs/site2.png" alt="" />

                  <div className="rating">
                    <p className="rating-value">Rating 9.7</p>
                    <Rate disabled defaultValue={5} />
                  </div>

                  <Button type="primary" icon={<GlobalOutlined />}>
                    Visit website
                  </Button>
                </div>
              </Col>

              <Col span={7}>
                <div className="site-review">
                  <img src="imgs/num3.png" alt="" />
                  <img src="imgs/site3.png" alt="" />

                  <div className="rating">
                    <p className="rating-value">Rating 9.5</p>
                    <Rate disabled defaultValue={5} />
                  </div>

                  <Button type="primary" icon={<GlobalOutlined />}>
                    Visit website
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      <section className="featured-products">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Featured" key="1">
            <p className="title">Featured</p>
            <Row>
              <Col xs={{ span: 18, offset: 3 }}>
                <div className="product-lists">
                  <img src="imgs/product1.png" alt="" />

                  <div className="product-detail">
                    <div className="description">
                      <p>America's Best-Priced Luxury Mattress</p>
                      <p>Customer Appreciation Sale! - $200 OFF!</p>
                      <p>
                        This luxury mattress provides great value for money. The
                        Saatva mattress comes in three different firmness level
                        allowing it to accommodate all preferences. The mattress
                        is built out of premium materials, it arrives
                        uncompressed and ready to use.
                      </p>
                      <span>Rating 9.5</span> <Rate disabled defaultValue={5} />
                    </div>

                    <div className="shipping">
                      <ul>
                        <li>Award winning mattress</li>
                        <li>365-Night Home Trial</li>
                        <li>Forever warranty</li>
                        <li>Free shipping</li>
                      </ul>
                      <a href="#">Show more</a>

                      <p style={{ margin: 0 }}>
                        <Button icon={<GlobalOutlined />}>SEE DEAL</Button>
                        <Button type="primary" icon={<GlobalOutlined />}>
                          VISIT WEBSITE
                        </Button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="product-lists">
                  <img src="imgs/product2.png" alt="" />

                  <div className="product-detail">
                    <div className="description">
                      <p>America's Best-Priced Luxury Mattress</p>
                      <p>Customer Appreciation Sale! - $200 OFF!</p>
                      <p>
                        This luxury mattress provides great value for money. The
                        Saatva mattress comes in three different firmness level
                        allowing it to accommodate all preferences. The mattress
                        is built out of premium materials, it arrives
                        uncompressed and ready to use.
                      </p>
                      <span>Rating 9.5</span> <Rate disabled defaultValue={5} />
                    </div>

                    <div className="shipping">
                      <ul>
                        <li>Award winning mattress</li>
                        <li>365-Night Home Trial</li>
                        <li>Forever warranty</li>
                        <li>Free shipping</li>
                      </ul>
                      <a href="#">Show more</a>

                      <Button icon={<GlobalOutlined />}>SEE DEAL</Button>
                      <Button type="primary" icon={<GlobalOutlined />}>
                        VISIT WEBSITE
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="In a Box" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Memory Foam" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Hybrid" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Back-Pain" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Premium" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </section>
    </div>
  );
};

export default Home;

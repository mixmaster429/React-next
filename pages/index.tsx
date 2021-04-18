import React from "react";

import { Header } from "@components";
import { Row, Col, Rate, Button, Tabs } from "antd";
import { GlobalOutlined, TagOutlined } from "@ant-design/icons";

const Home: React.FC = () => {
  const { TabPane } = Tabs;

  const product_data = [
    {
      product_image: "imgs/product4.png",
      company_image: "imgs/comp4.png",
    },
    {
      product_image: "imgs/product5.png",
      company_image: "imgs/comp5.png",
    },
    {
      product_image: "imgs/product6.png",
      company_image: "imgs/comp6.png",
    },
    {
      product_image: "imgs/product7.png",
      company_image: "imgs/comp7.png",
    },
    {
      product_image: "imgs/product8.png",
      company_image: "imgs/comp8.png",
    },
    {
      product_image: "imgs/product9.png",
      company_image: "imgs/comp9.png",
    },
    {
      product_image: "imgs/product10.png",
      company_image: "imgs/comp10.png",
    },
  ];

  const product_list = () => {
    return product_data.map((item, key) => {
      return (
        <div className="product-list" key={key}>
          <div className="product-image">
            <div className="product-number">#{key + 4}</div>
            <img src={item.product_image} alt="" />
          </div>

          <div className="product-detail">
            <img src={item.company_image} alt="" className="company-logo" />
            <div className="description">
              <p className="title">America's Best-Priced Luxury Mattress</p>
              <p className="sale">Customer Appreciation Sale! - $200 OFF!</p>
              <p className="product-description">
                This luxury mattress provides great value for money. The Saatva
                mattress comes in three different firmness level allowing it to
                accommodate all preferences. The mattress is built out of
                premium materials, it arrives uncompressed and ready to use.
              </p>
              <span className="product-rating">Rating 9.5</span>
              <Rate disabled defaultValue={5} />
            </div>

            <div className="shipping">
              <ul>
                <li>Award winning mattress</li>
                <li>365-Night Home Trial</li>
                <li>Forever warranty</li>
                <li>Free shipping</li>
              </ul>
              <a href="#" className="show-more">
                Show more
              </a>

              <p className="actions">
                <Button type="ghost" icon={<TagOutlined />}>
                  SEE DEAL
                </Button>
                <Button type="primary" icon={<GlobalOutlined />}>
                  VISIT WEBSITE
                </Button>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

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

      <section className="products">
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Featured" key="1">
            <div className="featured-products">
              <p className="section-title">Featured</p>

              <Row>
                <Col xs={{ span: 18, offset: 3 }}>
                  <div className="product-lists">
                    <div className="product-list">
                      <div className="product-image">
                        <span className="featured-badge editor">
                          <img src="imgs/badge1.png" alt="" />
                          EDITOR'S CHOICE
                        </span>
                        <div className="product-number">#1</div>
                        <img src="imgs/product1.png" alt="" />
                      </div>

                      <div className="product-detail">
                        <img
                          src="imgs/comp1.png"
                          alt=""
                          className="company-logo"
                        />
                        <div className="description">
                          <p className="title">
                            America's Best-Priced Luxury Mattress
                          </p>
                          <p className="sale">
                            Customer Appreciation Sale! - $200 OFF!
                          </p>
                          <p className="product-description">
                            This luxury mattress provides great value for money.
                            The Saatva mattress comes in three different
                            firmness level allowing it to accommodate all
                            preferences. The mattress is built out of premium
                            materials, it arrives uncompressed and ready to use.
                          </p>
                          <span className="product-rating">Rating 9.5</span>
                          <Rate disabled defaultValue={5} />
                        </div>

                        <div className="shipping">
                          <ul>
                            <li>Award winning mattress</li>
                            <li>365-Night Home Trial</li>
                            <li>Forever warranty</li>
                            <li>Free shipping</li>
                          </ul>
                          <a href="#" className="show-more">
                            Show more
                          </a>

                          <p className="actions">
                            <Button type="ghost" icon={<TagOutlined />}>
                              SEE DEAL
                            </Button>
                            <Button type="primary" icon={<GlobalOutlined />}>
                              VISIT WEBSITE
                            </Button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="product-list">
                      <div className="product-image">
                        <span className="featured-badge biggest">
                          <img src="imgs/badge2.png" alt="" />
                          biggest offer ever
                        </span>
                        <div className="product-number">#2</div>
                        <img src="imgs/product2.png" alt="" />
                      </div>

                      <div className="product-detail">
                        <img
                          src="imgs/comp2.png"
                          alt=""
                          className="company-logo"
                        />
                        <div className="description">
                          <p className="title">
                            America's Best-Priced Luxury Mattress
                          </p>
                          <p className="sale">
                            Customer Appreciation Sale! - $200 OFF!
                          </p>
                          <p className="product-description">
                            This luxury mattress provides great value for money.
                            The Saatva mattress comes in three different
                            firmness level allowing it to accommodate all
                            preferences. The mattress is built out of premium
                            materials, it arrives uncompressed and ready to use.
                          </p>
                          <span className="product-rating">Rating 9.5</span>
                          <Rate disabled defaultValue={5} />
                        </div>

                        <div className="shipping">
                          <ul>
                            <li>Award winning mattress</li>
                            <li>365-Night Home Trial</li>
                            <li>Forever warranty</li>
                            <li>Free shipping</li>
                          </ul>
                          <a href="#" className="show-more">
                            Show more
                          </a>

                          <p className="actions">
                            <Button type="ghost" icon={<TagOutlined />}>
                              SEE DEAL
                            </Button>
                            <Button type="primary" icon={<GlobalOutlined />}>
                              VISIT WEBSITE
                            </Button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="product-list">
                      <div className="product-image">
                        <span className="featured-badge best-seller">
                          <img src="imgs/badge3.png" alt="" />
                          best seller
                        </span>
                        <div className="product-number">#3</div>
                        <img src="imgs/product3.png" alt="" />
                      </div>

                      <div className="product-detail">
                        <img
                          src="imgs/comp3.png"
                          alt=""
                          className="company-logo"
                        />
                        <div className="description">
                          <p className="title">
                            America's Best-Priced Luxury Mattress
                          </p>
                          <p className="sale">
                            Customer Appreciation Sale! - $200 OFF!
                          </p>
                          <p className="product-description">
                            This luxury mattress provides great value for money.
                            The Saatva mattress comes in three different
                            firmness level allowing it to accommodate all
                            preferences. The mattress is built out of premium
                            materials, it arrives uncompressed and ready to use.
                          </p>
                          <span className="product-rating">Rating 9.5</span>
                          <Rate disabled defaultValue={5} />
                        </div>

                        <div className="shipping">
                          <ul>
                            <li>Award winning mattress</li>
                            <li>365-Night Home Trial</li>
                            <li>Forever warranty</li>
                            <li>Free shipping</li>
                          </ul>
                          <a href="#" className="show-more">
                            Show more
                          </a>

                          <p className="actions">
                            <Button type="ghost" icon={<TagOutlined />}>
                              SEE DEAL
                            </Button>
                            <Button type="primary" icon={<GlobalOutlined />}>
                              VISIT WEBSITE
                            </Button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <Row>
              <Col xs={{ span: 18, offset: 3 }}>
                <div className="product-lists">{product_list()}</div>
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

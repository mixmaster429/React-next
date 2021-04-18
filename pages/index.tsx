import React from "react";

import { Header } from "@components";
import { Row, Col, Rate, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const Home: React.FC = () => {
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
                    <p>
                      <Rate disabled defaultValue={5} />
                    </p>
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
                    <p>
                      <Rate disabled defaultValue={5} />
                    </p>
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
                    <p>
                      <Rate disabled defaultValue={5} />
                    </p>
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
    </div>
  );
};

export default Home;

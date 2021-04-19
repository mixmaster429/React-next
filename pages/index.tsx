import React from "react";
import { Footer, Header } from "@components";
import { Row, Col, Rate, Button, Tabs } from "antd";
import { GlobalOutlined, TagOutlined } from "@ant-design/icons";
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider-element",
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
                    <div className="product-list editor">
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

                    <div className="product-list biggest">
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

                    <div className="product-list best-seller">
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

      <section className="choose-best">
        <div className="section-banner">
          <Row>
            <Col lg={{ span: 10, offset: 4 }}>
              <p className="title">How to Choose the Best Mattress?</p>
            </Col>

            <img src="imgs/image1.png" alt="" />
          </Row>
        </div>

        <Row>
          <Col lg={{ span: 12, offset: 4 }}>
            <div className="section-details">
              <p className="title">Comprehensive Guide for 2021</p>
              <p>
                Buying a mattress is not something that we do regularly. Since
                you’re here, the chances are you’re either replacing an old and
                worn-out mattress or buying your first. Either way, you’re
                likely overwhelmed by the various brands available today. But
                what you’ll find even more perplexing are the different mattress
                technologies and the jargon used in the market. In this ultimate
                mattress buying guide, we’ve highlighted some critical tips to
                guide you when choosing the best mattress to buy today. We
                understand that narrowing down to just one bed from the sea of
                options in the market isn’t easy. For that reason, we’ve also
                included links to some of the top rated mattresses that may
                perfectly match your sleeping needs.
              </p>

              <img src="imgs/image2.png" alt="" />
              <p className="title">5 Major Types of Mattresses</p>
              <p>
                There are lots of decisions to make when purchasing a new
                mattress. But in our experience with different people’s buying
                habits, the most challenging decision is usually choosing
                between the different types of mattresses.
              </p>
              <p className="big-title">What is the best mattress to buy?</p>
              <p className="title">Memory Foam</p>
              <p>
                In the trade, memory foam is known as visco-elastic foam owing
                to its viscous and elastic properties. Memory foam responds to
                your body temperature and weight (pressure) to contour to your
                body shape and curves. When you get off the bed, the mattress
                recovers slowly to regain its original condition.
              </p>
              <img src="imgs/image3.png" alt="" />
              <p className="title">Latex Mattress</p>
              <p>
                Latex is a natural material derived from the sap of rubber
                trees. This material offers most of the benefits of memory foam,
                including pressure relief and motion isolation. However, it does
                not have the stuck-in-bed feeling that makes traditional memory
                foam a little annoying.
              </p>
              <p className="title">Innerspring Mattress</p>
              <p>
                These beds are commonly known as coil mattresses and date way
                back to 1865. Although they have gradually lost their luster
                over the years, innerspring mattresses are still a popular pick
                today due in part to their affordability.
              </p>
              <p className="title">Hybrid Mattress</p>
              <img src="imgs/image4.png" alt="" />
              <p>
                Hybrid mattresses are a new style of beds that combine 2 or more
                mattress technologies. A typical hybrid mattress has an all-foam
                comfort section and a coil-based core. Most of these mattresses
                employ memory foam for the comfort layer, although latex is
                common too. For the support system, most of the cheap models
                have traditional Bonnell springs. However, the best hybrid
                mattresses for the money have individually encased springs that
                move independently to lower motion isolation and offer localized
                support just where you need it.
              </p>
              <p className="title">Pillow Top Mattress</p>
              <p>
                Pillow top mattresses are a relatively new craze, too. These
                models are popular with individuals who want a mattress with a
                plush sleeping surface and a good balance of support and
                cushioning. A pillow-top mattress is a 2-tier bed with a support
                section that can be anything from coil to foam or latex. The
                pillow-top section is sewn or glued onto the main mattress and
                may comprise wool, latex, or memory foam, among other materials.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="site-reviews">
        <Slider {...settings}>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </Slider>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;

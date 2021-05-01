import React from 'react';
import { Footer, Header, Products, SiteReview } from '@components';
import { Row, Col } from 'antd';
import Slider from 'react-slick';

const Home: React.FC = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'slider-element',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="container homepage">
      <Header />

      <section className="top-section">
        <div className="container">
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
              listed below. <a href="#">Full Disclosure</a>
            </p>

            <img src="imgs/default.png" alt="" />
          </div>
        </div>
      </section>

      <section className="site-reviews">
        <div className="container">
          <Row gutter={[30, 20]}>
            <Col lg={8} xs={24}>
              <SiteReview
                number="imgs/number1.svg"
                brandImage="imgs/nectar.svg"
              />
            </Col>

            <Col lg={8} xs={24}>
              <SiteReview
                number="imgs/number2.svg"
                brandImage="imgs/dreamcloud.svg"
              />
            </Col>

            <Col lg={8} xs={24}>
              <SiteReview
                number="imgs/number3.svg"
                brandImage="imgs/saatva.svg"
              />
            </Col>
          </Row>
        </div>
      </section>

      <Products></Products>

      <section className="choose-best">
        <div className="section-banner">
          <Row>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 16, offset: 1 }}>
              <p className="title">How to Choose the Best Mattress?</p>
            </Col>

            <img src="imgs/image1.png" alt="" />
          </Row>
        </div>

        <Row>
          <Col lg={{ span: 14, offset: 2 }}>
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

      <section className="site-reviews slider">
        <Slider {...settings}>
          <div>
            <SiteReview
              number="/imgs/number1.svg"
              brandImage="/imgs/nectar.svg"
            />
          </div>
          <div>
            <SiteReview
              number="/imgs/number2.svg"
              brandImage="/imgs/dreamcloud.svg"
            />
          </div>
          <div>
            <SiteReview
              number="/imgs/number3.svg"
              brandImage="/imgs/saatva.svg"
            />
          </div>
          <div>
            <SiteReview
              number="/imgs/number1.svg"
              brandImage="/imgs/nectar.svg"
            />
          </div>
          <div>
            <SiteReview
              number="/imgs/number2.svg"
              brandImage="/imgs/dreamcloud.svg"
            />
          </div>
        </Slider>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Home;

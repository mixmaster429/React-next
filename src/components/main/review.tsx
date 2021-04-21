import { Button, Col, Row } from 'antd';
import React from 'react';
import { CheckOutlined, FlagFilled, GlobalOutlined } from '@ant-design/icons';
import { Rating } from '@components/rating';
import Slider from 'react-slick';
import { PriceCard } from '@components/pricing';

const Main: React.FC = () => {
  const icon_style = {
    color: '#B5916F',
    marginRight: 10,
    fontSize: 18,
  };

  const rates = [
    {
      max: 10,
      rate: 8.5,
      text: 'Price',
    },
    {
      max: 10,
      rate: 9.5,
      text: 'comfort',
    },
    {
      max: 10,
      rate: 9,
      text: 'body support',
    },
    {
      max: 10,
      rate: 9.5,
      text: 'customer support',
    },
  ];

  const slider_setting = {
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

  const price_lists = [
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#FE6581',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#00B227',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#FCDC74',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#fff000',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#FE6581',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp1.png',
      price: 1234,
      color: '#FCDC74',
    },
  ];

  return (
    <>
      <section className="section-header">
        <Row>
          <Col span={22} xl={{ span: 10, offset: 3 }}>
            <p className="title">Saatva Mattress Review</p>

            <p className="sub-title">
              <FlagFilled style={icon_style} />
              Not a bed In a box, arrives uncompressed
            </p>

            <ul className="review-lists">
              <li>
                <CheckOutlined style={icon_style} />
                Hand-delivered and set up for free
              </li>
              <li>
                <CheckOutlined style={icon_style} />
                180 day trial & over 23,000 5-star reviews
              </li>
              <li>
                <CheckOutlined style={icon_style} />
                Made from premium materials in the USA
              </li>
              <li>
                <CheckOutlined
                  style={{ color: '#B5916F', fontSize: 18, marginRight: 10 }}
                />
                Soft, medium, or firm
              </li>
            </ul>
          </Col>
          <Col span={22} xl={{ span: 7, offset: 2 }} className="right-side">
            <div className="company-logo">
              <img src="imgs/back1.png" alt="" className="background" />
              <img src="imgs/comp1.png" alt="" className="company-avatar" />
            </div>

            <div className="buttons">
              <Button ghost icon={<GlobalOutlined />} className="secondary">
                visit website
              </Button>
              <Button className="secondary">
                Visit saatva mattress <img src="imgs/right-arrow.png" alt="" />
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      <section className="button-tabs">
        <Button ghost style={{ color: '#454545', borderColor: '#B5B26F' }}>
          Expert view
        </Button>
        <Button ghost style={{ color: '#454545', borderColor: '#B5B26F' }}>
          Sizes & Pricing
        </Button>
        <Button ghost style={{ color: '#454545', borderColor: '#B5B26F' }}>
          User Reviews ({6})
        </Button>
        <Button ghost style={{ color: '#454545', borderColor: '#B5B26F' }}>
          Answered Questions ({32})
        </Button>
      </section>

      <section className="rating-section">
        <Row>
          <Col span={15} className="rating-details">
            <div className="rating-chart">
              <h2>Rating</h2>

              <Row>
                {rates.map((rate, key) => {
                  return (
                    <Col span={12} key={key}>
                      <Rating rate={rate}></Rating>
                    </Col>
                  );
                })}
              </Row>

              <p>
                Saatva is an online mattress retailer offering their Saatva
                Classic mattress with three different firmness levels in order
                to cater to the needs of most people. Saatva also offers a Latex
                Hybrid for those sleepers who prefer the feel of latex. Saatva
                offers financing options, delivers directly to your doorstep,
                and makes their mattresses right here in the USA.
              </p>
            </div>

            <div className="size-pricing">
              <h2>Sizes & Pricing</h2>

              <div>
                <h3>Saatva Classic</h3>

                <p>
                  While selecting a Saatva Classic mattress, you first select
                  the comfort level of your mattress: luxury firm, plush soft,
                  or firm. Then choose the height of your mattress: 11.5” or
                  14.5”. Select whether you want an adjustable base or not,
                  decide if you want a frame, and choose from one of the sizes
                  available. The Saatva mattress dimensions and prices are as
                  follows:
                </p>

                <p>
                  <strong>Twin:</strong> The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin XL:</strong> The twin XL mattress is priced at
                  $1,049. Its dimensions are 38 x 80″.
                </p>

                <p>
                  <strong>Full:</strong> The full-sized mattress costs $1,399.
                  Its dimensions are 54 x 75″.
                </p>

                <p>
                  <strong>Queen:</strong> The queen sized mattress costs $1,499,
                  and its dimensions are 60 x 80″.
                </p>

                <p>
                  <strong>King:</strong> The king sized mattress price is
                  $1,899. Its dimensions are 76 x 80″.
                </p>

                <p>
                  <strong>Split King:</strong> The split king measures 76 x 80″
                  and costs $2,098.
                </p>

                <p>
                  <strong>Cal King:</strong> The Cal king mattress costs $1,899.
                  Its dimensions are 72 x 84″.
                </p>

                <p>
                  <strong>Split Cal King:</strong> The split Cal king mattress
                  costs $2,099 and measures 72 x 84″.
                </p>

                <p>
                  Note that prices will vary based on how you customize your
                  mattress — for example, there is a difference in price between
                  the 11-inch and 14.5-inch height choice.
                </p>
              </div>

              <div>
                <h3>Saatva Latex Hybrid</h3>

                <p>
                  The Saatva Latex Hybrid is available in 7 sizes. Unlike the
                  Saatva Classic, the Latex Hybrid comes at one set height (13
                  inches) and there is only one firmness level.
                </p>

                <p>
                  <strong>Twin:</strong> The twin measures 38″ x 75″ and costs
                  $1,099.
                </p>

                <p>
                  <strong>Twin XL:</strong> The twin XL measures 38″ x 80″ and
                  costs $1,249.
                </p>

                <p>
                  <strong>Full:</strong> The full measures 54″ x 75″ and costs
                  $1,599.
                </p>

                <p>
                  <strong>Queen:</strong> The queen size measures 60″ x 80″ and
                  costs $1,799.
                </p>

                <p>
                  <strong>King:</strong> The king size measures 76″ x 80″ and
                  costs $2,199.
                </p>

                <p>
                  <strong>Cal King:</strong> The Cal king measures 72″ x 84″ and
                  costs $2,199.
                </p>

                <p>
                  <strong>Split King:</strong> The split king measures 76″ x 80″
                  and costs $2,499.
                </p>

                <p>
                  You can also conveniently add a foundation, frame, or
                  adjustable base to your order as well. Compared to its
                  counterparts, Saatva offers very reasonable prices for a
                  luxury mattress.
                </p>
              </div>

              <div className="size-cards">
                <Slider {...slider_setting}>
                  {price_lists.map((item, key) => {
                    return (
                      <div key={key}>
                        <PriceCard item={item}></PriceCard>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </Col>
          <Col span={9} className="reviews"></Col>
        </Row>
      </section>
    </>
  );
};

export default Main;

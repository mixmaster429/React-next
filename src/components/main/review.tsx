import { Button, Col, Row } from 'antd';
import React from 'react';
import { CheckOutlined, FlagFilled, GlobalOutlined } from '@ant-design/icons';

const Main: React.FC = () => {
  const icon_style = {
    color: '#B5916F',
    marginRight: 10,
    fontSize: 18,
  };

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
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
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
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>

                <p>
                  <strong>Twin:</strong>The twin mattress costs $849. Its
                  dimensions are 38 x 75″.
                </p>
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

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
      price: 1299,
      color: '#FE6581',
    },
    {
      price_type: 'Classic Twin',
      company_logo: 'imgs/comp2.png',
      price: 849,
      color: '#00B227',
    },
    {
      price_type: 'Classic Twin XL',
      company_logo: 'imgs/comp3.png',
      price: 1049,
      color: '#FCDC74',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp4.png',
      price: 1234,
      color: '#fff000',
    },
    {
      price_type: 'Classic Twin XL',
      company_logo: 'imgs/comp5.png',
      price: 1234,
      color: '#FE6581',
    },
    {
      price_type: 'Classic Queen',
      company_logo: 'imgs/comp6.png',
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
          <Col span={14} className="rating-details">
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

              <div>
                <h3>Overview</h3>

                <p>
                  Saatva is an online mattress retailer offering their Saatva
                  Classic mattress with three different firmness levels in order
                  to cater to the needs of most people. Saatva also offers a
                  Latex Hybrid for those sleepers who prefer the feel of latex.
                  Saatva offers financing options, delivers directly to your
                  doorstep, and makes their mattresses right here in the USA.
                </p>

                <p style={{ textAlign: 'center' }}>
                  <img
                    src="imgs/image5.png"
                    alt=""
                    style={{ maxWidth: '100%', margin: 'auto' }}
                  />
                </p>
              </div>

              <div>
                <h3>Construction</h3>

                <p>
                  <strong>Saatva Classic</strong> <br />
                  The Saatva Classic mattress combines wrapped comfort coils,
                  foam layers, edge support, and a cotton cover. It’s
                  constructed from the following layers:
                </p>

                <p>
                  <strong>Foam layer:</strong> Under the quilted cover is a
                  memory foam enhancement layer which is responsible for
                  providing exceptional pressure relief and continuous airflow.
                  Saatva uses CertiPUR-US foam.
                </p>

                <p>
                  <strong>Individually wrapped coils:</strong> This layer of
                  wrapped coils adds bounce to the mattress and helps in
                  providing body support. These coils also play a part in the
                  mattress isolating motion.
                </p>

                <p>
                  <strong>Support layer:</strong> The support layer comprises of
                  steel coils which act as the mattress’ support layer and also
                  help in making the user feel adequately supported. These coils
                  along with the ones placed above them add to the bounce of the
                  mattress and add to its pressure-responsiveness.
                </p>

                <p>
                  <strong>Foundation:</strong> The last layer of the mattress is
                  made up of high-density polyfoam. This foundation acts as the
                  mattress’ edge support and ensures that the mattress keeps its
                  shape at all times.
                </p>

                <p>
                  <strong>Saatva Latex Hybrid:</strong> The Saatva Latex Hybrid
                  features four layers, not counting the organic cotton cover.
                  They are as follows:
                </p>

                <p>
                  <strong>Organic wool layer:</strong> Sitting right beneath the
                  cover of the mattress, this organic New Zealand wool layer
                  acts as a natural fire retardant while also being breathable
                  to prevent overheating at night.
                </p>
                <p>
                  <strong>Talalay latex layer:</strong> Talalay is considered a
                  premium latex and of higher quality than Dunlop latex. This
                  layer provides the sleeper with support and is very responsive
                  to the body. Nevertheless, you won’t feel like you sink into
                  it as much as you would with memory foam. This latex layer has
                  a five zone design that provides more firmness and pressure
                  relief specifically in the lumbar region.
                </p>
                <p>
                  Quantum edge coil unit: In this layer, you’ll find three types
                  of coils that work together to provide incredible support
                  while contouring to your body, isolate motion, and provide
                  excellent edge support.
                </p>
                <p>
                  <strong>Organic eco loft pad:</strong> The final layer of the
                  Saatva Latex Hybrid mattress provides stability for your
                  mattress and all of the layers above it.
                </p>

                <p>Saatva mattresses are made in the USA.</p>
              </div>

              <div>
                <h3>Mattress Cover</h3>

                <p>
                  The Saatva Classic and Saatva Hybrid Latex mattress both
                  feature covers that are made of soft and breathable
                  GOTS-certified organic cotton. The cover is foam-quilted,
                  adding to the mattress’s pressure relief and its gentleness.
                  Due to an antimicrobial fabric treatment, the cover is
                  bacteria-resistant.
                </p>
              </div>

              <div>
                <h3>Firmness, Feel & Support</h3>

                <p>
                  The firmness, feel, and support of the Saatva Classic and
                  Saatva Latex Hybrid are a bit different. The Saatva Classic
                  allows you to choose between three firmness levels: Plush
                  Soft, Luxury Firm, and Firm.
                </p>

                <p>
                  The Plush Soft mattress is better for people who sleep on
                  their sides or are combination sleepers. If you choose Plush
                  Soft, it will score about a 3 on a scale of 1-10 (with 1 being
                  softest and 10 being firmest).
                </p>
                <p>
                  Their Luxury Firm mattress is the most popular, and it also
                  offers good overall support. Regardless of your sleeping
                  position, you shouldn’t feel a noticeable amount of sinkage
                  within the mattress and instead should be able to feel that
                  your weight is equally distributed across the mattress. Luxury
                  Firm scores about a 6 on the 1-10 firmness scale. The Saatva
                  Latex Hybrid is also considered medium-firm and would feel
                  similar to this level in firmness.
                </p>
                <p>
                  Their firmest option, which is just called Firm, is more like
                  an 8 on the 1-10 firmness scale. This option is best for
                  people who sleep primarily on their backs or stomachs, not on
                  their sides. It’s also a good choice for heavier bodies if you
                  don’t want to feel like you sink into the mattress too much.
                </p>
                <p>
                  When it comes to motion transfer, as long as the intensity of
                  motion is not enough to engage the coil layers, the mattress
                  does a great job at isolating motion. However, when the
                  movement is intensive enough to involve the coil layers, the
                  motion does get transferred.
                </p>
                <p>
                  As for bounce, the Latex Hybrid will feel a bit more bouncy
                  than the Saatva Classic. Edge support in both mattresses are
                  very good, particularly in the Latex Hybrid thanks to the
                  different types of coils used around the perimeter.
                </p>
              </div>

              <div>
                <h3>Purchase & Delivery Process</h3>

                <p>
                  After selecting the options you desire in your mattress, all
                  you have to do is to go through the simple online process of
                  paying for it. The delivery process is also seamless, as the
                  shipping is free and you get white-glove delivery along with
                  mattress removal. Saatva does not charge a cancellation fee
                  prior to the day of delivery. If the delivery runs later than
                  the time window, promised Saatva gives you the option to
                  cancel your order with a full refund. Mattresses can be
                  delivered to the contiguous United States. If you live in
                  Hawaii or Alaska, contact Saatva via the live chat on their
                  website, and they’ll be happy to provide you with a list of
                  forwarders who other customers have used to help complete
                  their deliveries.
                </p>
              </div>

              <div>
                <h3>Adjustable Beds</h3>

                <p>
                  For enhanced comfort and to maximize the rejuvenating effects
                  of Saatva brand mattresses, including the Saatva Classic, Loom
                  & Leaf, and Zenhaven, the Lineal Adjustable Base is designed
                  to support you throughout the day. With a one-touch remote,
                  control the position of your bed, raising your head, feet, or
                  both for Zero-Gravity support. The Saatva mattress adjustable
                  base also features under-bed illumination to light your path
                  in the middle of the night, a wall-hugging design that keeps
                  your bedside table within reach, 3-speed wave massage, and a
                  whisper-soft sealed motor.
                </p>

                <p>
                  The Lineal Adjustable Base comes in nine sizes, with financing
                  plans available from $107 per month for 12 months. The Lineal
                  comes with a 25-year warranty and free white glove delivery.
                  The bed’s legs are adjustable from 6” to 10”, raising the bed
                  14” to 18” from the floor.
                </p>

                <p>
                  <strong>Adjustable Bed Prices</strong>
                </p>

                <ul>
                  <li>
                    The Twin adjustable bed measures 38” x 75” and costs $1,199.
                  </li>
                  <li>
                    The Twin XL adjustable bed measures 38” x 80” and costs
                    $1,249.
                  </li>
                  <li>
                    The Full adjustable bed measures 54” x 75” and costs $1,299.
                  </li>
                  <li>
                    The Queen adjustable bed measures 60” x 80” and costs
                    $1,399.
                  </li>
                  <li>
                    The Split Queen adjustable bed measures 60” x 80” (2 pieces)
                    and costs $2,398.
                  </li>
                  <li>
                    The King adjustable bed measures 76” x 80” and costs $2,498.
                  </li>
                  <li>
                    The Split King adjustable bed measures 76” x 80” (2 pieces)
                    and costs $2,498.
                  </li>
                  <li>
                    The Cal King adjustable bed measures 72” x 84” and costs
                    $2,498.
                  </li>
                  <li>
                    The Split Cal King adjustable bed measures 72” x 84” and
                    costs $2,498.
                  </li>
                </ul>
              </div>

              <div>
                <h3>Pillow Offerings</h3>

                <p>
                  Available in King and Queen sizes, the Saatva pillow is a
                  luxury accessory that’s built to last and to provide complete
                  comfort at all times. A removal outer cover makes this pillow
                  easy to wash while a latex and cotton blend provides complete
                  support for your head and spine at all times. Available with
                  free shipping and financing options, the Saatva pillow comes
                  with a 45-day returns policy. If it doesn’t work for you, just
                  send it back and get a full refund.
                </p>
              </div>

              <div>
                <h3>Mattress Toppers</h3>

                <p>
                  The Saatva Mattress Topper gives you a little lift and keeps
                  you comfortable and cool. It’s an affordable addition to the
                  super-comfortable, high-end Saatva mattress, and one that is
                  available in sizes to suit all Saatva mattresses.
                </p>

                <p>
                  Customers can choose from three different topper types, each
                  with their own unique construct and price point. The cheapest
                  of these is the Foam, which uses a 1.5” high-density design to
                  evenly distribute your weight. The middle-range topper is
                  twice as thick and uses memory foam infused with graphite,
                  while the most expensive one benefits from a highly durable,
                  pressure-relieving Talalay latex.
                </p>

                <p>
                  All Saatva mattress toppers can be shipped free of charge
                  across the United States. There is a 45-day returns policy and
                  a 24/7 customer support team is on hand to help with any
                  issues you have.
                </p>

                <p>Price range from $195 to $395.</p>
              </div>

              <div>
                <h3>Customer support</h3>

                <p>
                  The Saatva customer support team is available 24/7 via live
                  chat, landline, and email. They also have a sleep blog with
                  information about mattresses, sleep habits, tips, and you can
                  find valuable information via the FAQ section present on their
                  website. If you want visual help, you can find some videos on
                  the company’s YouTube channel.
                </p>
              </div>
            </div>
          </Col>
          <Col span={10} className="reviews"></Col>
        </Row>
      </section>
    </>
  );
};

export default Main;

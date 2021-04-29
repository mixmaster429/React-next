import { Row, Col, Input, Button } from 'antd';

export const Contactus: React.FC = () => {
  const { TextArea } = Input;
  return (
    <div className="contact-us">
      <p className="title">Contact Us</p>

      <p className="sub-title">Contact us with any question or query</p>

      <div className="contact-form">
        <Row justify="space-around">
          <Col span={22} sm={6} className="contact-info">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
          </Col>

          <Col span={22} sm={16}>
            <TextArea rows={4} placeholder="Your Message" />
          </Col>

          <Col span={22} lg={18}>
            <p>
              By pressing the submit button you are accepting our{' '}
              <a href="#">Privacy Policy</a> and our <a href="#">Term of use</a>
            </p>
          </Col>

          <Col span={22} lg={4} className="submit">
            <Button className="btn-large">SEND A MESSAGE</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

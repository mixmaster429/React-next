import { Row, Col, Input, Space, Button } from 'antd';

export const Contactus: React.FC = () => {
  const { TextArea } = Input;
  return (
    <div className="contact-us">
      <p className="title">Contact Us</p>

      <p className="sub-title">Contact us with any question or query</p>

      <div className="contact-form">
        <Row justify="space-around">
          <Col xs={6}>
            <Space direction="vertical" size="large">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
            </Space>
          </Col>

          <Col xs={16}>
            <TextArea rows={4} placeholder="Your Message" />
          </Col>

          <Col xs={18}>
            <p>
              By pressing the submit button you are accepting our{' '}
              <a href="#">Privacy Policy</a> and our <a href="#">Term of use</a>
            </p>
          </Col>

          <Col xs={4} className="submit">
            <Button className="btn-large">SEND A MESSAGE</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

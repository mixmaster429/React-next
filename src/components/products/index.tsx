import React from 'react';
import { Tabs } from 'antd';
import { ProductList } from './productList';
import Slider from 'react-slick';

export const Products: React.FC = () => {
  const { TabPane } = Tabs;

  const category_list = [
    {
      name: 'Featured',
    },
    {
      name: 'In a Box',
    },
    {
      name: 'Memory Foam',
    },
    {
      name: 'Hybrid',
    },
    {
      name: 'Back-Pain',
    },
    {
      name: 'Premium',
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 20,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="products hide-for-small">
        <Tabs defaultActiveKey="1" type="card">
          {category_list.map((item, key) => {
            return (
              <TabPane tab={item.name} key={key}>
                <ProductList></ProductList>
              </TabPane>
            );
          })}
        </Tabs>
      </section>
      <section className="slider-section hide-for-large-up">
        <Slider {...settings}>
          <div className="selected">{category_list[0].name}</div>
          {category_list.slice(1).map((item, key) => {
            return <div key={key}>{item.name}</div>;
          })}
        </Slider>
      </section>
    </>
  );
};

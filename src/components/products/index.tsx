import React from 'react';
import { Tabs } from 'antd';
import { ProductList } from './productList';

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

  return (
    <section className="products">
      <Tabs defaultActiveKey="0" type="card">
        {category_list.map((item, key) => {
          return (
            <TabPane tab={item.name} key={key}>
              <ProductList></ProductList>
            </TabPane>
          );
        })}
      </Tabs>
      <i className="arrow flex flex-jc-c hide-for-medium-up">
        <img src="icons/right-arrow.svg" />
      </i>
    </section>
  );
};

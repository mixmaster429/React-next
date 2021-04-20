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
  );
};

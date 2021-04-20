import React from 'react';
import { Row, Col } from 'antd';
import { ProductItem } from './productItem';
import { FeaturedProduct } from './featuredProduct';

export const ProductList: React.FC = () => {
  const product_data = [
    {
      product_image: 'imgs/product4.png',
      company_image: 'imgs/comp4.png',
    },
    {
      product_image: 'imgs/product5.png',
      company_image: 'imgs/comp5.png',
    },
    {
      product_image: 'imgs/product6.png',
      company_image: 'imgs/comp6.png',
    },
    {
      product_image: 'imgs/product7.png',
      company_image: 'imgs/comp7.png',
    },
    {
      product_image: 'imgs/product8.png',
      company_image: 'imgs/comp8.png',
    },
    {
      product_image: 'imgs/product9.png',
      company_image: 'imgs/comp9.png',
    },
    {
      product_image: 'imgs/product10.png',
      company_image: 'imgs/comp10.png',
    },
  ];

  const featured_product = [
    {
      product_image: 'imgs/product1.png',
      company_image: 'imgs/comp1.png',
      badge_type: 'editor',
      badge_icon: 'imgs/badge1.png',
      badge_text: "EDITOR'S CHOICE",
    },
    {
      product_image: 'imgs/product2.png',
      company_image: 'imgs/comp2.png',
      badge_type: 'biggest',
      badge_icon: 'imgs/badge2.png',
      badge_text: 'biggest offer ever',
    },
    {
      product_image: 'imgs/product3.png',
      company_image: 'imgs/comp3.png',
      badge_type: 'editor',
      badge_icon: 'imgs/badge3.png',
      badge_text: 'best seller',
    },
  ];

  const product_list = () => {
    return product_data.map((item, key) => {
      return <ProductItem item={item} index={key} key={key}></ProductItem>;
    });
  };

  return (
    <>
      <div className="featured-products">
        <p className="section-title">Featured</p>

        <Row>
          <Col span={22} offset={1} xl={{ span: 18, offset: 3 }}>
            <div className="product-lists">
              {featured_product.map((item, key) => {
                return (
                  <FeaturedProduct
                    item={item}
                    index={key}
                    key={key}
                  ></FeaturedProduct>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col span={22} offset={1} xl={{ span: 18, offset: 3 }}>
          <div className="product-lists">{product_list()}</div>
        </Col>
      </Row>
    </>
  );
};

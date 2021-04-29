import React from 'react';
import { Card as AntdCard } from 'antd';
import { CardProps } from 'antd/lib/card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Card: React.FC<CardProps> = ({ title, children, ...rest }) => {
  return (
    <AntdCard title={title} bordered={false}>
      {children}
    </AntdCard>
  );
};

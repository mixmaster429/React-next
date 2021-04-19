import React from "react";
import { Space } from "antd";
import { Contactus } from "./contactus";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Contactus></Contactus>
      <div className="footer-bar">
        <Space align="center" size={100}>
          <img src="imgs/logo.png" alt="" />

          <p>
            This website is an independent comparison site that aims to help
            consumers find the matching product for their needs. We are able to
            maintain a free service by charging an advertising fee to featured
            brands on our site. These advertising fees might impact the
            placement of the brands and scoring. We make effort to present
            up-to-date information; however, we do not compare or include all
            service providers in the market. All rights reserved @ 2019
          </p>
        </Space>
      </div>
    </footer>
  );
};

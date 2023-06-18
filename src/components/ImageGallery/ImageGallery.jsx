import { Image } from "antd";
import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => (
  <Image.PreviewGroup
    preview={{
      onChange: (current, prev) =>
        console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div>
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        className="image__gallery"
      />
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        className="image__gallery"
      />
    </div>
  </Image.PreviewGroup>
);
export default ImageGallery;

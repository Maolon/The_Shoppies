import React from "react";
import { Empty } from "antd/es";

const ShopieEmpty: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Empty
        style={{}}
        imageStyle={{
          height: 60,
        }}
        description={<span style={{color:"grey"}}>No Search Result</span>}
      ></Empty>
    </div>
  );
};

export default ShopieEmpty;

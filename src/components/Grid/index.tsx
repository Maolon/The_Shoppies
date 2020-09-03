import React from "react";
import { Noms } from "../../hooks/nomReducer";
import ShopieCard from "../Card";
import { Row, Col } from "antd/es";

const ShoppieGrid: React.FC<Noms> = ({ data }) => {
  return (
    <Row>
      {data.map((ele, idx) => {
        return (
          <Col xs={8} sm={8} md={6} lg={5} xl={4} key={ele.Title}>
            <ShopieCard
              Title={ele.Title}
              Year={ele.Year}
              imdbID={ele.imdbID}
              Type={ele.Type}
              Poster={ele.Poster}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ShoppieGrid;

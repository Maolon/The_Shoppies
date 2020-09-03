import React, { useContext, useState } from "react";
import { Movie } from "../../hooks/nomReducer";
import { Card, Button } from "antd/es";
import { CrownTwoTone } from "@ant-design/icons";
import { isEleExist } from "../../util/isEleExist";
import { AppContext } from "../../hooks/context";
import defaultImg from "../../assets/image.svg";
const { Meta } = Card;

const ShopieCard: React.FC<Movie> = ({ Title, Year, imdbID, Type, Poster }) => {
  const { state, dispatch } = useContext(AppContext);
  const [imgErr, setImgErr] = useState(false);
  return (
    <Card
      hoverable
      cover={
        <img
          alt={Title}
          src={!imgErr ? Poster : defaultImg}
          onError={() => {
            setImgErr(true);
          }}
        />
      }
      style={{ maxWidth: "30vh" }}
      className="shoppie-card"
    >
      <Meta
        title={Title}
        
        description={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{Year}</div>
            <Button
              type="default"
              onClick={() =>
                  dispatch({
                      type: "ADD_NORM",
                      id: imdbID,
                      payload: {
                        Title: Title,
                        Year: Year,
                        imdbID: imdbID,
                        Type: Type,
                        Poster: Poster,
                      },
                    })
              }
              disabled = {isEleExist(state, imdbID)}
              shape="circle"
              icon={
                <CrownTwoTone
                  twoToneColor={
                    isEleExist(state, imdbID) ? "#1890ff" : "#A4A4A4"
                  }
                />
              }
              ghost
            />
          </div>
        }
      />
    </Card>
  );
};

export default ShopieCard;

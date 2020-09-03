import React, { useContext } from 'react';
import { List, Avatar, Button } from 'antd/es';
import { AppContext } from '../../hooks/context';
import { DeleteOutlined } from '@ant-design/icons';

const ShopieList: React.FC = () =>{
    const { state, dispatch } = useContext(AppContext);
    return (
        <List
        itemLayout="horizontal"
        dataSource={state.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.Poster} shape={"square"}/>}
              title={<a href="https://ant.design">{item.Title}</a>}
              description={ <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{item.Year}</div>
              <Button
                type="dashed"
                onClick={() =>
                  dispatch({
                    type: "DEL_NORM",
                    id: item.imdbID,
                    payload: {
                      Title: item.Title,
                      Year: item.Year,
                      imdbID: item.imdbID,
                      Type: item.Type,
                      Poster: item.Poster,
                    },
                  })
                }
                shape="circle"
                style={{ width:"0.3vw"}}
                icon={<DeleteOutlined />}
              />
            </div>}
            />
          </List.Item>
        )}
      />)
}
  
export default ShopieList
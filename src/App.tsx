import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Layout, Input } from "antd/es";
import ShopieEmpty from "./components/ShopiEmpty";
import ShoppieGrid from "./components/Grid";
import ShopieList from "./components/ShopiList";
import { CrownTwoTone } from "@ant-design/icons";
import { AppContext } from "./hooks/context";
import Banner from "./components/Banner";
import { useSearch } from "./hooks/useSearch";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const App: React.FC = () => {
  const { state } = useContext(AppContext);
  const {result,setSearch,search} = useSearch();
  
  useEffect(() => {
    document.title = "Shoppie";
  }, []);

  return (
    <Layout>
      <Header className="header">
        <div className="shoppie-title">
          <div>Shoppies</div>
          <Search
            placeholder="input movie title"
            onSearch={(val) => {
              setSearch(val);
            }}
            enterButton
            size="large"
            style={{ width: "60%" }}
          />
        </div>
      </Header>
      <Content>
        <Layout className="site-layout-background" style={{ height: "90vh" }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {}}
            onCollapse={(collapsed, type) => {}}
            theme="light"
          >
            <span style={{ fontSize: "2rem",margin:"0 0 0 0.5vw"}}>
              <CrownTwoTone />
              <span> Nominations</span>
            </span>
            <ShopieList />
          </Sider>
          <Content style={{ minHeight: 280, height: "auto" }}>
            {state.data.length >= 5 ? <Banner /> : ""}
            {search === "" || result.data.length === 0 ? (
              <ShopieEmpty />
            ) : (
              <ShoppieGrid data={result.data} />
            )}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Shoppies ©2020 Created by Tony He
      </Footer>
    </Layout>
  );
};

export default App;

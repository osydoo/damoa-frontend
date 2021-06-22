import React from "react";
import { Layout, Menu, Image } from "antd";
import styled from "styled-components";
import img from "../asset/imgSlider1.jpg"
const { Header, Footer, Content } = Layout;

function Home() {
  const array = ["ABOUT", "SERVICES", "CAREER", "CONTACT"];
  
  const HeaderContent = styled.div`
    width: 1000px;
    margin: auto;
    font-weight : bold;

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `;

  const Logo = styled.div`
    height: 64px;
    width: 200px;
    color: white;
    font-size: 32px;
    float: left;
  `

  
  const ImageSlider = styled.div`
    width: 1000px;
    margin: auto;
  `;

  return (
    <Layout>
      <Header className="header">
        <HeaderContent>
          <Logo>Damoa</Logo>
          <Menu mode="horizontal" theme="dark" style={{ float: "right" }}>
            {array.map((key, index) => {
              return <Menu.Item key={key}>{key}</Menu.Item>;
            })}
          </Menu>
        </HeaderContent>
      </Header>
      <Content>
        <ImageSlider>
          <Image preview={false} src={img} />
        </ImageSlider>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;

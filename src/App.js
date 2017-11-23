import React, { Component } from "react";
import { Layout, Menu, Icon, Card } from "antd";
import "./App.css";
import routeConfigs from "./routes";

const { Header, Footer, Content } = Layout;

const TopMenu = props => (
  <Menu
    onClick={props.handleClick}
    selectedKeys={[props.current]}
    mode="horizontal"
  >
    {routeConfigs.routes.map(route => (
      <Menu.Item key="mail">
        <Icon type="mail" />
        {route.name}
      </Menu.Item>
    ))}
  </Menu>
);

const CardContent = () => (
  <Card title="Card title" extra={<a href="">More</a>} style={{ width: 300 }}>
    <img
      alt="example"
      width="100%"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    />
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

class App extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <TopMenu
              handleClick={this.handleClick}
              current={this.state.current}
            />
          </Header>
          <Content style={{ padding: "0 10vh" }}>
            <CardContent />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

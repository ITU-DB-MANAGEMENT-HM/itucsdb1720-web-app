import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import routeConfigs from "./routes";
import Router from "./router";

import NavBar from "./components/navbar";
import LoginModal from "./components/login-modal";
import AuthButton from "./components/auth-button";

const { Header, Content } = Layout;

class App extends Component {
  state = {
    current: window.location.pathname,
    isLoginModalOpen: false,
    isAuth: false
  };
  handleClick = e => {
    console.log("click ", e);
    console.log(this.state);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <NavBar
            handleClick={this.handleClick}
            current={this.state.current}
            routes={routeConfigs.routes}
          >
            <AuthButton
              isAuth={this.state.isAuth}
              handleClick={() => {
                if (!this.state.isAuth) {
                  this.setState({
                    isLoginModalOpen: true
                  });
                } else {
                  this.setState({
                    isAuth: false
                  });
                }
              }}
            />
            <LoginModal
              visible={this.state.isLoginModalOpen}
              handleLogin={() => {
                this.setState({ isAuth: true, isLoginModalOpen: false });
              }}
              handleCancel={() => {
                this.setState({ isLoginModalOpen: false });
              }}
            />
          </NavBar>
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ padding: "10px 10vh" }}>
            {this.state.isLoginModalOpen && <LoginModal />}
            <Router
              isAuth={false}
              routes={routeConfigs.routes}
              NoMatch={routeConfigs.NoMatch}
              noAuth={routeConfigs.noAuthRedirect}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;

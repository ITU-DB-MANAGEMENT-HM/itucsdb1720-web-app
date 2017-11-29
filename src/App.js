import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import routeConfigs from "./routes";
import Router from "./router";

import NavBar from "./components/navbar";
import LoginModal from "./components/login-modal";
import AuthButton from "./components/auth-button";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    current: window.location.pathname,
    isLoginModalOpen: false,
    isAuth: false
  };
  handleClick = e => {
    console.log("click ", e);
    console.log(this.state);
    this.props.history.push(e.key);
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
              handleLogin={fields => {
                console.log(fields);
                this.setState({ isAuth: true, isLoginModalOpen: false });
              }}
              handleCancel={() => {
                this.setState({ isLoginModalOpen: false });
              }}
            />
          </NavBar>
        </Header>

        <Content style={{ padding: "5vh", textAlign: "center" }}>
          {this.state.isLoginModalOpen && <LoginModal />}
          <Router
            isAuth={false}
            routes={routeConfigs.routes}
            NoMatch={routeConfigs.NoMatch}
            noAuth={routeConfigs.noAuthRedirect}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ITUNDER ©2017 Created by Hamzali&Sahin
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(App);

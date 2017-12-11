import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";

import {connect} from "react-redux"
import {login, logout, fetchUser} from "./redux/actions/student"
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
  };
  componentDidMount () {
    this.props.dispatch(fetchUser());
  }
  handleClick = e => {
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
              isAuth={this.props.isLoggedIn}
              isLoading={this.props.loginIsLoading}
              handleClick={() => {
                if (!this.props.isLoggedIn) {
                  this.setState({
                    isLoginModalOpen: true
                  });
                } else {
                  this.props.dispatch(logout());
                }
              }}
            />
            <LoginModal
              visible={this.state.isLoginModalOpen}
              handleLogin={fields => {
                this.setState({isLoginModalOpen: false });
                this.props.dispatch(login(fields.username, fields.password, fields.pin))
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

App = connect(store => {
  return {isLoggedIn: store.student.isLoggedIn, loginIsLoading: store.student.loginIsLoading}
})(App)
export default withRouter(App);

import React, { Component } from 'react';

import NavBar from './navbar';

import { Layout } from 'antd';
const { Header, Footer, Content} = Layout;

class AppLayout extends Component {
    state = {
      current: 'mail',
    }
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }

    render = () => {
      return (
        <div className="App">
          <Layout style={{ minHeight: '100vh'}}>
        <Header>
          <NavBar handleClick={this.handleClick} current={this.state.current}/>
        </Header>
        <Content style={{ padding: '0 10vh'}}>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
        </div>
      );
    }
  }
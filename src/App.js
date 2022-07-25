
import React from 'react';

import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css'

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import ViewHome from './views/home';

const { Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>      
      </Header>
      <Content>
        <ViewHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;

import React from 'react';
import AppHeader from './components/common/header';

import { Layout } from 'antd';
import 'antd/dist/antd.min.css'
import './App.css';
import AppHome from './views/home';

const { Header, Content} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>      
      </Header>
      <Content>
        <AppHome/>
      </Content>
    </Layout>
  );
}

export default App;

import React from 'react';
import AppHeader from './components/common/header';

import { Layout } from 'antd';
import 'antd/dist/antd.min.css'
import './App.css';

const { Header} = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>      
      </Header>
    </Layout>
  );
}

export default App;

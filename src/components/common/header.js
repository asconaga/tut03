import React from 'react'

import { FaBolt } from 'react-icons/fa';

import { Menu } from 'antd';

const AppHeader = () => {
  return (
    <div className='containr-fluid'>
        <div className='header'>
            <div className="logo">           
                <a href="./"><FaBolt/>Tech</a>
            </div>                
            <Menu mode='horizontal' defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="feature">Features</Menu.Item>
                <Menu.Item key="howitworks">How it Works</Menu.Item>
                <Menu.Item key="faq" >FAQ</Menu.Item>
                <Menu.Item key="pricing" >Pricing</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>    
            </Menu>
        </div>
    </div>    
  );
}

export default AppHeader

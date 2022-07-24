import React from 'react'

import { FaBolt } from 'react-icons/fa';

import { Anchor } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className='containr-fluid'>
        <div className='header'>
            <div className="logo">           
                <a href="./"><FaBolt/>lijidea</a>
            </div>                
            {/* <Menu mode='horizontal' defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="feature">Features</Menu.Item>
                <Menu.Item key="howitworks">How it Works</Menu.Item>
                <Menu.Item key="faq" >FAQ</Menu.Item>
                <Menu.Item key="pricing" >Pricing</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>    
            </Menu> */}

            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
          </Anchor>

        </div>
    </div>    
  );
}

export default AppHeader

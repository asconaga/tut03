import React, { useState } from 'react'

import { FaBars, FaBolt } from 'react-icons/fa';

import { Anchor, Button, Drawer } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container-fluid'>
      <div className='header'>
        <div className="logo">
          <a href="./"><FaBolt />lijidea</a>
        </div>
        <div className='mobileHidden'>
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
        <div className='mobileVisible'>
          <Button type="primary" onClick={showDrawer}>
            <FaBars/>
          </Button>
          <Drawer width={'50%'}  placement="right" onClose={onClose} visible={visible}>
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>    
  );
}

export default AppHeader

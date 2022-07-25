import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd'

import { FaPlayCircle } from 'react-icons/fa'

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>How it works</h2>
                <p>A special mixture of jam, jam and more jam makes our software great</p>
            </div>
            <div className="contentHolder">
                <Button size="large" onClick={showModal}><FaPlayCircle/></Button>
            </div>
            <Modal destroyOnClose={true} footer={null} title="ECommerce Tutorial" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/dJRsWJqDjFE?autoplay=1&mute=1&start=66" title="ECommerce Tutorial"></iframe>
            </Modal>            
        </div>
      </div> 
  )
}

export default AppWorks

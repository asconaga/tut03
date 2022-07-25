import React from 'react'
import { useState } from 'react';
import { Button, Carousel, Modal } from 'antd'
import { FaDesktop } from 'react-icons/fa'


const items = [
    {
      key: '1',
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

const AppHero = () => {
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
    <div id="hero" className='heroBlock'>
      <Carousel>
      {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><FaDesktop/> Watch a Demo</Button>
                </div>
   
              </div>
              {/* <Modal destroyOnClose={true} footer={null} title="ECommerce Tutorial" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                  <iframe width="100%" height="350" src="https://www.youtube.com/embed/dJRsWJqDjFE?autoplay=1&mute=1&start=66" title="ECommerce Tutorial"></iframe>
                </Modal>                */}
            </div>  
          );
        })}
      </Carousel>
    </div>
  )
}

export default AppHero

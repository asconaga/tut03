import { Button, Collapse } from 'antd'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa';

const { Panel } = Collapse;

const faqText = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

const AppFaq = () => {
    const onChange = (key) => {
        console.log(key);
      }; 
  return (
    <div id="faq" className='block faqBlock'>
        <div className='container-fluid'> 
            <div className='titleHolder'>
                <h2>Frequently Asked Questions</h2>
                <p>Look here for standrd answers</p>
            </div>
            <Collapse accordion defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="This is panel header 1" key="1">
                    <p>{faqText}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{faqText}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{faqText}</p>
                </Panel>
            </Collapse>
            <div className='quickSupport'>
                <h3>Want quick support?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
                <Button type="primary"><FaEnvelope/> Support</Button>
            </div>
        </div>
    </div> 
  )
}

export default AppFaq


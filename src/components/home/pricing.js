import { Button, Card, List } from 'antd'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';

const data = [
    {
      title: 'Bronze',
      price: '£2,999',
      waffle: 'Obcaecati consequatur libero repudiandae, aperiam itaque laborum'
    },
    {
      title: 'Silver',
      price: '£5,999',
      waffle: 'Obcaecati consequatur libero repudiandae, aperiam itaque laborum'
    },
    {
      title: 'Gold',
      price: '£9,999',
      waffle: 'Obcaecati consequatur libero repudiandae, aperiam itaque laborum'
    }
  ];

const AppPricing = () => {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Choose a plan to fit your needs</h2>
                <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
            </div>
                <List
                    grid={{ gutter: 16, xs: 1, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card hoverable title={item.title}>
                            <p>{item.price}</p>
                            <p>{item.waffle}</p>   
                            <Button type="primary" size="large"><FaTelegramPlane/> Get Started</Button>                 
                        </Card>
                    </List.Item>
                )}
            />
            </div>
    </div>
  )
}

export default AppPricing

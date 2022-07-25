import React from 'react'
import Meta from 'antd/lib/card/Meta'
import { Card, Col, Row } from 'antd'  

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const AppFeature = () => {
    const arrImages = [ image1, image2, image3, image4, image5, image6 ];

    const items = [
        {
            key: '1',
            title: 'Modern Design',
        },
        {
            key: '2',
            title: 'Clean and Elegant',
        },
        {
            key: '3',
            title: 'Great Support',
        },
        {
            key: '4',
            title: 'Nice and sleepy',
        },
        {
            key: '5',
            title: 'Unlimited Features',
            },
        {
            key: '6',
            title: 'Advanced Options',
        }       
    ]        

    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Features</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                        <Col md={{ span: 8 }} key={item.key}>
                            <Card hoverable cover={<img alt={item.title} src={arrImages[parseInt(item.key) - 1]} />} >
                                <Meta title={item.title} />   
                            </Card>
                        </Col>
                        );
                    })}
                </Row>
            </div>        
        </div>
        )
      }
      
      export default AppFeature
      
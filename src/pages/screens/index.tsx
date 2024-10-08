import React, { useEffect, useRef, useState } from 'react'
import type { TreeDataNode, TreeProps } from 'antd';

import { Flex, Input, Layout, Popconfirm, Space, Upload, Button, Row, Col, Tree, Image, } from "antd"
import { HappyProvider } from '@ant-design/happy-work-theme';
import { SearchOutlined, UploadOutlined, DownOutlined } from '@ant-design/icons';
import MainLayout from '../../infratructure/components/layouts/layout';
import Constants from '../../core/common/Constants';
import "../../asset/styles/components/screen.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Footer, Content } = Layout;


const contentStyle: React.CSSProperties = {
    minHeight: 120,
    lineHeight: '24px',
};
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#fcc407',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 0px)',

};

const inputStyle = {
    backgroundColor: "#f0eeda",
    width: 'calc(60% - 8px)',
    borderRadius: 24,
    marginTop: 24
}


// Table
interface DataType {
    key: React.Key;
    name: string;
    platform: string;
    version: string;
    sizeScreen: number;
    dvdSurface: string;
    jackWire: string;
    attention: string;
}

//Tree
const treeData: TreeDataNode[] = [
    {
        title: 'Santafe 2020 lắp Android box 165',
        key: '0-0',
        children: [
            {
                title: 'Mặt dưỡng',
                key: '0-0-0',
                children: [
                    {
                        title: 'Giá nhập: 500.000đ',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'Giá bán: 700.000đ',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'Tên dưỡng: Santafe 2020',
                        key: '0-0-0-2',
                    },
                ],
            },
            {
                title: 'Giắc',
                key: '0-0-1',
                children: [
                    {
                        title: 'Giắc nguồn: "Santafe 2019 có canbus"',
                        key: '0-0-1-0',
                    },
                    {
                        title: 'Giắc radio: Giắc radio Huyndai',
                        key: '0-0-1-1',
                    },
                    {
                        title: 'Giắc usb zin: Không giữ giắc usb',
                        key: '0-0-1-2',
                    },
                ],
            },
            {
                title: 'Hướng dẫn',
                key: '0-0-2',
                children: [
                    {
                        title: 'Đấu cam zin',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'Đấu volang',
                        key: '0-0-2-1',
                    },
                ],
            },
        ],
    },
];
const ScreenPage = () => {

    const [selectedImage, setSelectedImage] = useState(Constants.Car.List[0].img);
    const sliderRef = useRef<any>(null);
    const handleImageClick = (it: any) => {
        setSelectedImage(it.img);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        afterChange: (current: number) => setSelectedImage(Constants.Car.List[current].img)
    };

    const listInfoCarDVD: DataType[] = [];
    for (let i = 0; i < 10; ++i) {
        listInfoCarDVD.push({
            key: i.toString(),
            name: 'Everest',
            platform: 'Ford',
            version: '2020',
            sizeScreen: 9,
            jackWire: 'Giắc Everest 2020, Canbus đen',
            dvdSurface: 'Dưỡng 9inch, dưỡng vuông',
            attention: 'Giắc cùng bộ canbus',
        });
    }

    // tree
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <MainLayout>
            <div className='screen-container'>
                <Flex gap="middle" wrap justify='center'>
                    <Layout style={layoutStyle}>

                        <Content style={contentStyle}>
                            <Flex justify="center" align="center" gap="middle">
                                <Input style={inputStyle}
                                    size="large"
                                    variant="borderless"
                                    placeholder="Trương Ngọc Nghĩa"
                                    addonAfter={<SearchOutlined />} />
                            </Flex>
                            <Flex justify="center" align="center" gap="middle">
                                <HappyProvider>
                                    <Button type="primary" danger >loading more</Button>
                                </HappyProvider>
                                <Space>
                                    Thêm ảnh
                                    <Upload>
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                                        <HappyProvider>
                                            <Button type="primary" >Confirm</Button>
                                        </HappyProvider>
                                    </Popconfirm>
                                </Space>
                            </Flex>
                            <Row>
                                <Col span={8}>
                                    <Tree
                                        showLine
                                        switcherIcon={<DownOutlined />}
                                        defaultExpandedKeys={['0-0-0']}
                                        onSelect={onSelect}
                                        treeData={treeData}
                                    />
                                </Col>
                                <Col span={16}>
                                    {/* <h2>Hướng dẫn</h2>
                                <h4>Đấu cam zin</h4>
                                <Row>
                                    <Col span={8}>
                                        <Image
                                            width={200}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />
                                    </Col>
                                    <Col span={16}>
                                        sdfasfsdfsdasffd
                                    </Col>
                                </Row>
                                <h4>Đấu volang</h4>
                                <Image
                                    width={200}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                /> */}
                                    <div className="gallery">
                                        <div className="main-image bottom">
                                            <Image src={selectedImage} alt="Selected" />
                                        </div>
                                        <div className="slider-controls">
                                            <button className="prev" onClick={() => sliderRef.current.slickPrev()}>❮</button>
                                            <button className="next" onClick={() => sliderRef.current.slickNext()}>❯</button>
                                        </div>
                                        <div className="slider bottom">
                                            <Slider ref={sliderRef} {...settings}>
                                                {
                                                    Constants.Car.List.map((it, index) => {
                                                        return (
                                                            <div className="border-img" onClick={() => handleImageClick(it)}>
                                                                <Image src={it.img} alt={`Slide ${index + 1}`} preview={false} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Content>
                        <Footer style={footerStyle}>Footer</Footer>
                    </Layout>
                </Flex>
            </div>

        </MainLayout>
    )
}
export default ScreenPage
import React, { useEffect, useState } from 'react'
import type { TableColumnsType } from 'antd';

import { Flex, Input, Layout, Popconfirm, Space, Upload, Avatar, Button, List, Skeleton, Radio, Image, Badge, Table, Dropdown, Row, Col, } from "antd"
import { HappyProvider } from '@ant-design/happy-work-theme';
import { SearchOutlined, UploadOutlined, DownOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
import MainLayout from '../../infratructure/components/layouts/layout';
const { Header, Footer, Sider, Content } = Layout;


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


const HomePage = () => {
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

    return (
        <MainLayout>
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
                        <Table
                            dataSource={listInfoCarDVD}
                            pagination={false}
                            className='table-common'
                        >
                            <Column
                                title={"STT"}
                                dataIndex="stt"
                                key="stt"
                                width={"5%"}
                                render={(val, record, index) => (
                                    <div>
                                        {index + 1}
                                    </div>
                                )}
                            />
                            <Column
                                title={
                                    "Tên xe"
                                }
                                key={"name"}
                                dataIndex={"name"}

                            />
                            <Column
                                title={
                                    "Hãng xe"
                                }
                                key={"platform"}
                                dataIndex={"platform"}

                            />
                            <Column
                                title={
                                    "Đời xe"
                                }
                                key={"version"}
                                dataIndex={"version"}

                            />
                            <Column
                                title={
                                    "Kích thước màn"
                                }
                                key={"sizeScreen"}
                                dataIndex={"sizeScreen"}
                            />
                            <Column
                                title={
                                    "Dưỡng"
                                }
                                key={"dvdSurface"}
                                dataIndex={"dvdSurface"}
                            />
                            <Column
                                title={
                                    "Giắc"
                                }
                                key={"jackWire"}
                                dataIndex={"jackWire"}
                            />
                            <Column
                                title={
                                    "Thao tác"
                                }
                                fixed="right"
                                align='center'
                                render={
                                    (record) => {
                                        return (
                                            <div>
                                                <a href={`/Detail/${record.key}`}>Chỉnh sửa</a>
                                            </div>
                                        )
                                    }
                                }
                            />
                        </Table>

                        {/* <Table
                        columns={columns}
                        expandable={{ defaultExpandedRowKeys: ['0'] }}
                        dataSource={data}
                        bordered
                    /> */}

                    </Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Flex>
        </MainLayout>
    )
}
export default HomePage
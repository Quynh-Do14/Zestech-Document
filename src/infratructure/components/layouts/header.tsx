import { Col, Flex, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

function HeaderComponent() {

    const headerStyle: React.CSSProperties = {
        textAlign: 'justify',
        height: 84,
        lineHeight: '24px',
        backgroundColor: '#fcc407',
    };

    const rowHeaderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '84px',
        fontSize: 24
    }
    return (
        <div>
            <Header style={headerStyle}>
                <Row style={headerStyle} gutter={[16, 24]}>
                    <Col span={4}>
                        <Flex
                            style={{
                                paddingBlock: 12,
                            }}
                        >
                            <a href="/">
                                <img
                                    // width={160}
                                    src="https://zestech.vn/wp-content/themes/zestech/images/logo.png"
                                />
                            </a>
                            {/* <Avatar shape="square" src="https://zestech.vn/wp-content/themes/zestech/images/logo.png" /> */}
                            {/* <h1>Zestech - Màn hình ô tô xuất Mỹ</h1> */}

                        </Flex></Col>
                    <Col span={20}>
                        <Row>
                            {/* <Col style={rowHeaderStyle} className="gutter-row" span={4}><a href='/'>Trang chủ</a></Col> */}
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a href='/Screen'>Màn hình</a></Col>
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a>Android box</a></Col>
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a>Camera 3 mắt</a></Col>
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a>Film cách nhiệt</a></Col>
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a>Loa</a></Col>
                            <Col style={rowHeaderStyle} className="gutter-row" span={4}><a>Đèn</a></Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </div>
    )
}

export default HeaderComponent
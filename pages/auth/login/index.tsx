import { Button, Col, Form, Input, Row } from "antd"
import layoutTypes from "../../../config/layoutTypes"
import { NextPageWithLayout } from "../../_app"

const Login: NextPageWithLayout = () => {
    return (
        <div className="p-4 md:p-8">
            <h4 className=" text-[30px] font-bold hover:animate-pulse">Welcome</h4>
            <p className=" text-[18px] mb-6">Login to continue your session!</p>

            <Form layout="vertical">
                <Row gutter={[5, 6]}>
                    <Col xs={24} md={18}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email is required !'
                                },
                            ]}>
                            <Input
                                className="rounded-lg"
                                placeholder="Your email" type="email" size="large" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={18}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password is required !'
                                },
                            ]}>
                            <Input
                                className="rounded-lg"
                                placeholder="Your email" type="password" size="large" />
                        </Form.Item>
                    </Col>

                    <Col xs={24}>
                        <Button htmlType="submit" size="large" type="primary" shape="round" className="border-black
                         bg-black 
                           hover:bg-white hover:text-black hover:border-black focus:bg-black focus:text-white focus:border-black">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

Login.layout = layoutTypes.auth

export default Login

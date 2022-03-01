import { Button, Col, Form, Input, Row } from "antd"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Meta from "../../../components/UI/Meta"
import layoutTypes from "../../../config/layoutTypes"
import AuthService from "../../../services/Auth.service"
import { StoreInterface } from "../../../store"
import { setFormData } from "../../../utils/common.utils"
import { NextPageWithLayout } from "../../_app"

const Login: NextPageWithLayout = () => {

    /** ANTD Form hook */
    const [form] = Form.useForm()

    /** DISPATCH HOOKS */
    const dispatch = useDispatch()

    /** NEXT ROUTER HOOK */
    const router = useRouter()

    /** REDUX STORE */
    const store = useSelector((store: StoreInterface) => store)
    const { authenticating } = store.auth

    /**
     * Form submit
     */
    const onSubmit = (values: any) => {
        const formData = setFormData(values)
        dispatch(AuthService.login(formData, () => {
            router.push('/')
        }))
    }

    return (
        <>
            <Meta
                description="Login to continue your session."
                image="/auth/auth-1.jpg"
                pageTitle="Login - Activity Tracker"
                title="Login - Activity Tracker"
            />

            <div className="p-4 md:p-8">
                <h4 className=" text-[30px] font-bold hover:animate-pulse">Welcome</h4>
                <p className=" text-[18px] mb-6">Login to continue your session!</p>

                <Form
                    form={form}
                    onFinish={onSubmit}
                    layout="vertical">
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
                            <Button htmlType="submit" loading={authenticating} size="large" type="primary" shape="round" className="border-black bg-black 
                           hover:bg-white hover:text-black hover:border-black focus:bg-black focus:text-white focus:border-black">
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        </>
    )
}

Login.layout = layoutTypes.auth

export default Login

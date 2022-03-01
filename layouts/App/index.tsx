import { Layout } from "antd"
import AppHeader from "../../components/Header/AppHeader"
import Protected from "../Protected"

const {Sider,Header,Content} = Layout

const AppLayout: React.FC = ({ children }) => {
    return (
        <Protected>
            <Layout className="h-screen">
                <Sider className="bg-white shadow-md">

                </Sider>
                <Layout>
                    <AppHeader/>
                    <Content className="bg-gray-100">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Protected>
    )
}


export const applyAppLayout = (page: React.ReactElement) => {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}


export default AppLayout

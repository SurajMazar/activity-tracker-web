import { Layout } from 'antd'
import UserMenu from './UserMenu'

const { Header } = Layout



const AppHeader: React.FC = () => {
    return (
        <>
            <Header className="bg-white shadow-md">
                <div className="flex items-center h-full cursor-pointer">
                    <div className="ml-auto">
                        <UserMenu/>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default AppHeader

import { Dropdown, Menu, Skeleton } from "antd"
import { LogoutOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux"
import { StoreInterface } from "../../../store"
import Avatar from "antd/lib/avatar/avatar"
import { useEffect } from "react"
import AuthService from "../../../services/Auth.service"

const UserMenu:React.FC = () => {

    /** REDUX STATE */
    const store = useSelector((store:StoreInterface)=>store)
    const { authUser, loadingProfile } = store.auth

    /** DISPATCH HOOK */
    const dispatch = useDispatch()

    /** fetch user profile in case of empty redux */
    useEffect(()=>{
        if(!authUser){
            dispatch(AuthService.loadProfile())
        }
    },[]) 



    /** USER MENU */
    const userMenu = (
        <Menu>
            <Menu.Item key="0" 
                onClick={()=>{
                    dispatch(AuthService.logout())
                }}
                icon={<LogoutOutlined />} 
                className="hover:font-semibold">
                Logout
            </Menu.Item>
        </Menu>
    )


    return(
        <>
            <Dropdown 
                overlay={userMenu} 
                placement="bottomCenter"
                trigger={['click']}>
                <div className="flex space-x-2 items-center h-full">
                    {
                        loadingProfile?
                        <Skeleton.Avatar active={true} size={"large"} shape={"circle"} className="items-center flex" />:
                        authUser?
                        <>
                            <Avatar size={'large'} src={authUser.profile_pic} className="bg-black text-white">
                                {authUser.name.charAt(0)}
                            </Avatar>
                            <p className="text-[14px]">{authUser.name}</p>
                        </>:''
                    }
                    
                </div>
            </Dropdown>
        </>
    )
}

export default UserMenu

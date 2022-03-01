import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { StoreInterface } from "../../store"

const Protected: React.FC = ({ children }) => {

    /** Redux store*/
    const store = useSelector((state: StoreInterface) => state)
    const { authenticated } = store.auth

    /** Router hook */
    const router = useRouter()

    /** Redirect in not authenticated */
    const redirectToLogin = ()=>{
        if (!authenticated) {
            router.push({
                pathname:"/auth/login"
            })
        } 
    }


    useEffect(()=>{
        redirectToLogin()
    },[authenticated])
    

    return (<>
        {authenticated ? <div className="__protected">{children}</div> : ''}
    </>)
}

export default Protected

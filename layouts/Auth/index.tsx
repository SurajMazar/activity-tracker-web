
const AuthLayout:React.FC = ({children}) =>{
    return (
        <>
            {children}
        </>
    )
}


export const applyAuthLayout = (page:React.ReactElement) =>{
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}


export default AuthLayout

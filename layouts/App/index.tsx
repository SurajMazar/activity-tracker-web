import Protected from "../Protected"

const AppLayout:React.FC = ({children}) =>{
    return (
        <Protected>
            {children}
        </Protected>
    )
}


export const applyAppLayout = (page:React.ReactElement) =>{
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}


export default AppLayout

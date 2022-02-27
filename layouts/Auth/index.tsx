import { useEffect, useState } from "react"
import { getColorPalet } from "../../utils/color.utils"

const AuthLayout:React.FC = ({children}) =>{

    // @component states
    const [palette, setPalette] = useState<Array<string>>([])
    const [active,setActive] = useState<number>(0)

    /**
     * Generate bg color palette from the image selected
     */
    const generateColorPalette = async() => {
        const cp = await getColorPalet('auth-image')
        if(cp){
            setPalette(cp)
        }
    }

    /**
     * css for linear gradient
     */
    const generateGradientCss = () =>{
        if(palette && palette.length == 2){
            return `linear-gradient(-45deg, ${palette[0]}, ${palette[1]})`
        }
        return ''
    }

    /**set rendom image */
    useEffect(()=>{
        const random = Math.floor(Math.random()*5+1)
        setActive(random)
    },[])


    /** set color palette */
    useEffect(()=>{
      generateColorPalette()
    },[active])


    

    return (
        <div className="flex p-4 justify-center items-center h-screen" style={{
            background:generateGradientCss()
        }}>
            <div className="w-full md:w-2/3 bg-white shadow-lg">
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-1/2 h-[450px]">
                        <img src={`/auth/auth-${active}.jpg`} alt="" id="auth-image" className="w-full h-full  object-cover" />
                    </div>
                    <div className="w-1/2 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
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

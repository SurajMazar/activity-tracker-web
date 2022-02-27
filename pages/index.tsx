import { NextPage } from "next"
import { useEffect, useState } from "react"
import { getColorPalet } from "../utils/color.utils"

const Home: NextPage = () => {

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

    useEffect(()=>{
        setTimeout(()=>{
            generateColorPalette()
        },1000)
    },[active])


    const changeImage = ()=>{
        if(active === 3){
            setActive(0)
        }else{
            setActive(active+1)
        }
    }

    return (
        <div className="flex p-8 justify-center items-center h-full h-screen" style={{
            background:generateGradientCss()
        }}>
            <div className="w-2/3">
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-1/2 h-full relative">
                        <img src={`/auth/auth-${active}.jpg`} alt="" id="auth-image" className="w-full object-cover" />
                        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                            <button className="bg-white p-2 text-black" onClick={changeImage}>
                                Change image
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

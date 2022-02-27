import layoutTypes from "../config/layoutTypes";
import { applyAuthLayout } from "./Auth";

/**
 * 
 * @param page 
 * @param layout 
 * @returns 
 */
const applyLayout = (page:React.ReactElement,layout:keyof typeof layoutTypes|undefined) =>{
    switch(layout){

        case layoutTypes.app: 
            return page
        
        case layoutTypes.auth:
            return applyAuthLayout(page)
        
        default:
            return page
    }
}

export default applyLayout

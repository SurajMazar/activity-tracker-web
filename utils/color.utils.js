import ColorThief from 'colorthief'

/**
 * 
 * @param {HTML image} image 
 * @returns Array
 */
const getColor = (image) => {
    return new Promise(function (resolve) {
        if(image && image.width && image.width>0){
            const colorthief = new ColorThief();
            resolve(colorthief.getPalette(image, 2))
        }
    })
}


const generateColorString = (array) =>{
    return `rgb(${array[0]},${array[1]},${array[2]})`
}

/**
 * 
 * @param String imageId 
 * @returns Array
 */
export const getColorPalet = async (imageId) => {
    const image = document.getElementById(imageId)
    const paletteDec = await getColor(image)

    let palette = [];

    if(paletteDec && paletteDec.length){
        paletteDec.forEach(p=>{
            palette.push(generateColorString(p))
        })
    }

    return palette;
}






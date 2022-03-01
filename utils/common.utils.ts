/**
 * Get value from localstorage
 * @param key:string
 */
export const getLocalStorage = (key: string) => {
  if (typeof localStorage !== "undefined") {
    const value = localStorage.getItem(key);
    if (value && isJsonParseAble(value)) {
      return JSON.parse(value);
    }

    return value;
  }
  return undefined;
};


/**
 * Checks if the value is jon parseable
 * @param value
 * @returns Boolean
 */
export const isJsonParseAble = (value: any) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};


/**
 * Sets value in localstorage
 * @param key 
 * @param value 
 */
export const setLocalStorage = (key: string, value: any) => {
    if(typeof localStorage !== 'undefined'){
        localStorage.setItem(key,value)
    }
};


/**
 * Prepare form data
 * @param value 
 * @returns 
 */
export const setFormData = (value:any) =>{
    if(value && Object.keys(value).length){
        const form = new FormData()
        Object.keys(value).forEach(key=>{
            form.append(key,value[key])
        })
    }

    return value
}

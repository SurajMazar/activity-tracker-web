import CryptoJS from 'crypto-js'
import { TOKEN_SECRET } from '../config/app.config';

/**
 * Encrypts string and return hash
 * @param value 
 * @return encrypted
 */
export const encrypt = (value:string) =>{
    return CryptoJS.AES.encrypt(value, TOKEN_SECRET).toString();
}


/**
 * Decrypt encrypted ciper and returns value
 * @param encrypted 
 * @returns decrypted
 */
export const decrypt = (encrypted:string) =>{    
    return CryptoJS.AES.decrypt(encrypted, TOKEN_SECRET);
}

import { Request, Response, NextFunction } from 'express'
import CryptoJS from 'crypto-js';

declare global {
    namespace Express {
        interface Request {
            encode: Function,
            decode: Function
        }
    }
}

export default function encrypt(req: Request, res: Response, next: NextFunction) {
    req['encode'] = (data: any) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), String(process.env.ENC_KEY)).toString();
    };

    req['decode'] = (data: any) => {
        const bytes = CryptoJS.AES.decrypt(data, String(process.env.ENC_KEY))
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    next();
}
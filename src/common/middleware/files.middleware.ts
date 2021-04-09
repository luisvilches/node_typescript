import { Request, Response, NextFunction } from 'express'
import formidable from 'formidable'

declare global {
    namespace Express {
        interface Request {
            files: any,
            body: any
        }
    }
}

const promiseForm = (req: Request): Promise<any> => {
    const form = new formidable({ multiples: true });
    return new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
            if (err) reject(err);
            else resolve({ body: fields, files: files });
        });
    });
}

export default async function middleFiles(req: Request, res: Response, next: NextFunction) {
    const result = await promiseForm(req);
    req['files'] = result.files;
    req['body'] = result.body;
    next();
}
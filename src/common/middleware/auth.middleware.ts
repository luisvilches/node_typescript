import { Request, Response, NextFunction } from 'express'
import { verify, decode } from 'jsonwebtoken'

declare global {
    namespace Express {
        interface Request {
            user: any
        }
    }
}

export const auth = (req: Request, res: Response, next: NextFunction) => {

    if (!req.headers.authorization) return res.status(403).send({ message: 'Error de auntenticación' });

    const token: string = req.headers.authorization.split(" ")[1];

    verify(token, String(process.env.JWT_KEY), (err, t) => {
        if (err) return res.status(403).send({ message: 'Error de auntenticación' });
        else {
            const key: any = process.env.JWT_KEY;
            const payload: any = decode(token, key);
            req.user = payload.user;
            next();
        }
    })
}
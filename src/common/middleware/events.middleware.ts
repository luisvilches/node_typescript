import { Request, Response, NextFunction } from 'express'
import { EventEmitter } from 'events';
const event = new EventEmitter();
import controllers from '../events';

declare global {
    namespace Express {
        interface Request {
            emitEvent: Function
        }
    }
}

export default function events(req: Request, res: Response, next: NextFunction) {
    if (controllers != undefined) controllers(event);
    req.emitEvent = (key: any, data?: any) => event.emit(key,data);
    next();
}

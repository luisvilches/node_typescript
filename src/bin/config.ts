import { Application, express } from '.'
import { loadControllers } from 'awilix-express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import dotenv = require('dotenv');

export const configApp = (app: Application, config?: Function) => {
    process.env.NODE_ENV = process.env.NODE_ENV || "development";
    process.env.APP_ENV = process.env.APP_ENV || "development";

    dotenv.config({ path: path.join(path.resolve(), 'config', `${process.env.APP_ENV}.env`) })

    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(express.static(path.join(path.resolve(), 'public')));
    app.disable('x-powered-by');
    app.use(loadControllers("controllers/*.ts", { cwd: __dirname }))


    if (config != undefined) config(app);
}
import { scopePerRequest } from 'awilix-express';
import { Application } from './index'
import { createContainer, asClass } from 'awilix';

export default (app: Application, dependecies: Array<any>) => {
    const container = createContainer({ injectionMode: 'CLASSIC' });
    const dep: any = {}

    dependecies.map(e => { dep[e.constructor.name] = asClass(e).scoped() })
    container.register(dep);
    app.use(scopePerRequest(container));

    return container;
}
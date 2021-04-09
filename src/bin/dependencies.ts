import { scopePerRequest } from 'awilix-express';
import { Application } from './index'
import { createContainer, asClass } from 'awilix';

interface Dependecies {
    name: string,
    dep: any
}

export default (app: Application, dependecies: Array<Dependecies>) => {
    const container = createContainer({ injectionMode: 'CLASSIC' });
    const dep: any = {}

    for (let d in dependecies) {
        dep[dependecies[d].name] = asClass(dependecies[d].dep).scoped()
    }

    container.register(dep);
    app.use(scopePerRequest(container));

    return container;
}
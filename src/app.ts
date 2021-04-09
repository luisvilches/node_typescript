import { express, Application, configApp, createServer, loadDependencies } from './bin';
import config from './config.app'
import dependecies from './dependecies.app'
import connectDatabase from './common/persistence/mongo.persistence'

const app: Application = express();
const container = loadDependencies(app, dependecies)
const { server, io } = createServer(app, container);

configApp(app, config);
connectDatabase(() => {
    console.log('Database running');
});

export { server, app, io }
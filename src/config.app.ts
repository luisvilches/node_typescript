import { Application } from './bin'
import middleFiles from './common/middleware/files.middleware'
import encDec from './common/middleware/enc.middleware'
import events from './common/middleware/events.middleware'

export default (app: Application) => {
    app.use(middleFiles)
    app.use(encDec);
    app.use(events);
}
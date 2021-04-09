import { Application } from './bin'
import middleFiles from './common/middleware/files.middleware'
import encDec from './common/middleware/enc.middleware'
import events from './common/middleware/events.middleware'

var vhost = require('vhost')

export default (app: Application) => {
    app.use(middleFiles)
    app.use(encDec);
    app.use(events);

    app.use(vhost('*.localhost', function handle(req: any, res: any, next: any) {
        // for match of "foo.bar.example.com:8080" against "*.*.example.com":
        console.dir(req.vhost.host) // => 'foo.bar.example.com:8080'
        console.dir(req.vhost.hostname) // => 'foo.bar.example.com'
        console.dir(req.vhost.length) // => 2
        console.dir(req.vhost[0]) // => 'foo'
        console.dir(req.vhost[1]) // => 'bar'
    }))
}
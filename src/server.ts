import { server } from './app';

server.listen(process.env.PORT, () => {
    console.log('running in port 3000');
})
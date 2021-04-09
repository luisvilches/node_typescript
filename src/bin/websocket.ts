import { Server } from 'http';
import { Socket } from 'socket.io';
import { verify } from 'jsonwebtoken';
const { scopePerRequest } = require('awilix-socketio');

export default (server: Server, options?: any, controllers?: Function, onConnect?: Function, onDisconnect?: Function, container?: any) => {
    const io: Socket = require("socket.io")(server, options);
    io.use((socket: any, next: any) => {
        if (socket.handshake.query && socket.handshake.query.auth) {
            let auth: string = socket.handshake.query.auth.replace(/"'/, '"').replace(/'"/, '"');

            verify(auth, String(process.env.JWT_KEY), (err, decoded) => {
                if (err) return next(new Error('Authentication error'));
                socket.decoded = decoded;
                next();
            });
        }
        else next(new Error('Authentication error'));
    })

    io.use(scopePerRequest(container)); 

    io.on('disconnect', (_) => {
        if (onDisconnect != undefined) onDisconnect(_);
    });

    io.on('connection', (socket) => {
        if (onConnect != undefined) onConnect(socket);
        if (controllers != undefined) controllers(io, socket);
    })

    return io;
}
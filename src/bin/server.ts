import { createServer as CRS } from 'http';
import { Application } from '.';
import { Socket } from 'socket.io';
import wsConfig from './websocket'
import websocketCtrl, { onConnect, onDisconnect } from '../controllers/websocket.controllers'

export const createServer = (app: Application, container?: any) => {
    const server = CRS(app);
    const io: Socket = wsConfig(server, { path: '/ws' }, websocketCtrl, onConnect, onDisconnect, container);

    return { server, io }
}
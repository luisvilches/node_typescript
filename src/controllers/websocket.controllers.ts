import { Socket } from 'socket.io'

export const onConnect = (socket: any) => {

}

export const onDisconnect = (_: any) => {

}

export default (io: Socket) => {

    io.on('mi', (data: any) => {

    })

}
import { io } from 'socket.io-client';

const connectWithSocketServer = () => {
    const socket = io(process.env.REACT_APP_SOCKET_SERVER_URL)

    socket.on("connect", () => {
        console.log(
            `Successfully connected to socket.io server. Connected socket.id: ${socket.id}`
        );
    });

};

export { connectWithSocketServer };

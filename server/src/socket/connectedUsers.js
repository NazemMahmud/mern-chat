const connectedUsers = new Map();
let io = null;

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
};


const getOnlineUsers = () => {
    const onlineUsers = [];

    connectedUsers.forEach((value, key) => {
        if (!onlineUsers.some(item => item.userId === value.userId)) {
            onlineUsers.push({
                userId: value.userId,
                socketId: key,
            });
        }
    });

    return onlineUsers;
};

const removeConnectedUser = ({ socketId }) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
    }
};

// get active connections of a particular user
const getActiveConnections = (userId) => {
    // get user's socket ids(active socket connections)
    const activeConnections = [];

    connectedUsers.forEach((value, key) => {
        if (value.userId === userId) {
            activeConnections.push(key);
        }
    });

    return activeConnections;
};

const setServerSocketInstance = (ioInstance) => {
    io = ioInstance;
};

const getServerSocketInstance = () => {
    return io;
};

export { addNewConnectedUser, getOnlineUsers, removeConnectedUser, getActiveConnections,
    setServerSocketInstance, getServerSocketInstance };

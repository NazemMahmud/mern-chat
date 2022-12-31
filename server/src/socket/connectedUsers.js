const connectedUsers = new Map();

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

export { addNewConnectedUser, getOnlineUsers, removeConnectedUser };

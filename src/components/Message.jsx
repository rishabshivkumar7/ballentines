import React from 'react';

const Message = ({ message }) => {
    if (!message) return null;

    return (
        <div className="message-popup">
            {message}
        </div>
    );
};

export default Message;

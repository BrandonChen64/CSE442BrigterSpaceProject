import React, { useState } from 'react';

function MessageBoard() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [messages, setMessages] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleMessageSubmit = () => {
        if (title.trim() !== '' && body.trim() !== '') {
            if (editingIndex !== null) {
                // If editing, update the existing message
                const updatedMessages = [...messages];
                updatedMessages[editingIndex] = { title, body };
                setMessages(updatedMessages);
                setEditingIndex(null);
            } else {
                // If not editing, add a new message
                const newMessage = { title, body };
                setMessages(prevMessages => [...prevMessages, newMessage]);
            }
            setTitle('');
            setBody('');
        } else {
            alert('Please fill in both title and body before submitting.');
        }
    };

    const handleEdit = (index) => {
        // Set the title and body of the message being edited
        setTitle(messages[index].title);
        setBody(messages[index].body);
        // Set the index of the message being edited
        setEditingIndex(index);
    };

    return (
        <div>
            <h1>Message Board</h1>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button onClick={handleMessageSubmit}>
                {editingIndex !== null ? 'Save Edit' : 'Add Message'}
            </button>

            <h2>Messages:</h2>
            {messages.length === 0 ? (
                <p>No messages yet.</p>
            ) : (
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            <strong>{message.title}</strong>: {message.body}
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MessageBoard;
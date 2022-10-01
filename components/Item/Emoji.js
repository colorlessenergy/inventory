import { useEffect, useRef, useState } from 'react';

const Emoji = ({ ID, emoji, toggleIsEditing, isEditingEmoji }) => {
    const [newEmoji, setNewEmoji] = useState('');
    const handleNewEmoji = event => {
        if (event.currentTarget.value.length > 2) return;
        setNewEmoji(event.currentTarget.value);

        if (event.currentTarget.value.length === 2) {
            let inventory = JSON.parse(localStorage.getItem('inventory'));
            const itemIndex = inventory.findIndex(item => item.ID === ID);
            inventory[itemIndex].emoji = event.currentTarget.value;
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    useEffect(() => {
        setNewEmoji(emoji);
    }, []);

    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditingEmoji]);

    return (
        <div
            onClick={toggleIsEditing}
            data-id="emoji"
            className="item-emoji mr-1">
            {isEditingEmoji ? (
                <input
                    className="item-emoji-input"
                    type="text"
                    onChange={handleNewEmoji}
                    value={newEmoji}
                    ref={inputRef}
                />
            ) : (
                newEmoji
            )}
        </div>
    );
};

export default Emoji;

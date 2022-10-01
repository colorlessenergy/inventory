import { useEffect, useState } from 'react';

const Item = ({ ID, emoji, item, amount, setInventory }) => {
    const [isEditing, setIsEditing] = useState({
        emoji: false,
        item: false,
        amount: false
    });
    const toggleIsEditing = event => {
        setIsEditing(previousIsEditing => ({
            ...previousIsEditing,
            [event.target.getAttribute('data-id')]:
                !previousIsEditing[event.target.getAttribute('data-id')]
        }));
    };

    const [newEmoji, setNewEmoji] = useState('');
    const handleNewEmoji = event => {
        if (event.currentTarget.value.length > 2) return;
        setNewEmoji(event.currentTarget.value);

        if (event.currentTarget.value.length === 2) {
            let inventory = JSON.parse(localStorage.getItem('inventory'));
            let itemIndex = inventory.findIndex(item => item.ID === ID);

            inventory[itemIndex].emoji = event.currentTarget.value;
            localStorage.setItem('inventory', JSON.stringify(inventory));
        }
    };

    useEffect(() => {
        setNewEmoji(emoji);
    }, []);

    const handleFinishedEditing = () => {
        setIsEditing({
            emoji: false,
            item: false,
            amount: false
        });

        setInventory(JSON.parse(localStorage.getItem('inventory')));
    };

    return (
        <div className="item mb-1">
            <div className="text-right">
                {isEditing.emoji || isEditing.item || isEditing.amount ? (
                    <button
                        onClick={handleFinishedEditing}
                        className="yellow-button mr-1">
                        done
                    </button>
                ) : null}
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20">
                        <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
                    </svg>
                </button>
            </div>
            <div className="flex-flow">
                <div className="flex-flow">
                    <div
                        onClick={toggleIsEditing}
                        data-id="emoji"
                        className="item-emoji mr-1">
                        {isEditing.emoji ? (
                            <input
                                className="item-emoji-input"
                                type="text"
                                onChange={handleNewEmoji}
                                value={newEmoji}
                            />
                        ) : (
                            emoji
                        )}
                    </div>
                    <div onClick={toggleIsEditing} data-id="item">
                        {item}
                    </div>
                </div>
                <div onClick={toggleIsEditing} data-id="amount">
                    {amount}
                </div>
            </div>
        </div>
    );
};

export default Item;

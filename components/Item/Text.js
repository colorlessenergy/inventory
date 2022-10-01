import { useEffect, useState } from 'react';

const Text = ({ ID, item, toggleIsEditing, isEditingItem }) => {
    const [newItem, setNewItem] = useState('');
    const handleNewItem = event => {
        setNewItem(event.currentTarget.value);

        let inventory = JSON.parse(localStorage.getItem('inventory'));
        const itemIndex = inventory.findIndex(item => item.ID === ID);
        inventory[itemIndex].item = event.currentTarget.value;
        localStorage.setItem('inventory', JSON.stringify(inventory));
    };

    useEffect(() => {
        setNewItem(item);
    }, []);

    return (
        <div onClick={toggleIsEditing} data-id="item">
            {isEditingItem ? (
                <input
                    className="item-input"
                    type="text"
                    onChange={handleNewItem}
                    value={newItem}
                />
            ) : (
                newItem
            )}
        </div>
    );
};

export default Text;

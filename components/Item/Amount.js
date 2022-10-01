import { useEffect, useRef, useState } from 'react';

const Emoji = ({ ID, amount, toggleIsEditing, isEditingAmount }) => {
    const [newAmount, setNewAmount] = useState(1);
    const handleNewAmount = event => {
        setNewAmount(event.currentTarget.value);

        let inventory = JSON.parse(localStorage.getItem('inventory'));
        const itemIndex = inventory.findIndex(item => item.ID === ID);
        inventory[itemIndex].amount = event.currentTarget.value;
        localStorage.setItem('inventory', JSON.stringify(inventory));
    };

    useEffect(() => {
        setNewAmount(amount);
    }, []);

    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditingAmount]);

    return (
        <div onClick={toggleIsEditing} data-id="amount">
            {isEditingAmount ? (
                <input
                    className="item-amount-input"
                    type="number"
                    onChange={handleNewAmount}
                    value={newAmount}
                    ref={inputRef}
                />
            ) : (
                amount
            )}
        </div>
    );
};

export default Emoji;

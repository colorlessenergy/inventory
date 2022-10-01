import { useState } from 'react';

import DeleteItem from './DeleteItem';
import Emoji from './Item/Emoji';
import Text from './Item/Text';
import Amount from './Item/Amount';

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

                <DeleteItem ID={ID} setInventory={setInventory} />
            </div>
            <div className="flex-flow">
                <div className="flex-flow">
                    <Emoji
                        ID={ID}
                        emoji={emoji}
                        toggleIsEditing={toggleIsEditing}
                        isEditingEmoji={isEditing.emoji}
                    />
                    <Text
                        ID={ID}
                        item={item}
                        toggleIsEditing={toggleIsEditing}
                        isEditingItem={isEditing.item}
                    />
                </div>

                <Amount
                    ID={ID}
                    amount={amount}
                    toggleIsEditing={toggleIsEditing}
                    isEditingAmount={isEditing.amount}
                />
            </div>
        </div>
    );
};

export default Item;

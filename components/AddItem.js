const AddItem = ({ setInventory }) => {
    const addItemToInventory = () => {
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        const ID = JSON.parse(localStorage.getItem('ID'));

        inventory.push({
            ID,
            emoji: '',
            item: '',
            amount: 1
        });

        ID += 1;

        localStorage.setItem('ID', JSON.stringify(ID));
        localStorage.setItem('inventory', JSON.stringify(inventory));

        setInventory(JSON.parse(localStorage.getItem('inventory')));
    };

    return (
        <button onClick={addItemToInventory} className="yellow-button">
            add
        </button>
    );
};

export default AddItem;

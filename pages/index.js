import { useEffect, useState } from 'react';
import Head from 'next/head';

import Item from '../components/Item';

export default function Home() {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        setInventory(JSON.parse(localStorage.getItem('inventory')));
    }, []);

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
        <div>
            <Head>
                <title>inventory</title>
                <meta name="description" content="inventory" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="flex-flow">
                    <h1>inventory</h1>

                    <button
                        onClick={addItemToInventory}
                        className="yellow-button">
                        add
                    </button>
                </div>

                <div>
                    {inventory.map(item => {
                        return (
                            <Item
                                emoji={item.emoji}
                                item={item.item}
                                amount={item.amount}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

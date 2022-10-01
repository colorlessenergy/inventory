import { useEffect, useState } from 'react';
import Head from 'next/head';

import Item from '../components/Item';
import AddItem from '../components/AddItem';

export default function Home() {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem('inventory')) {
            localStorage.setItem(
                'inventory',
                JSON.stringify([
                    {
                        ID: 0,
                        emoji: '🍊',
                        item: 'tangerine',
                        amount: 1
                    }
                ])
            );
        }

        setInventory(JSON.parse(localStorage.getItem('inventory')));
    }, []);

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

                    <AddItem setInventory={setInventory} />
                </div>

                <div>
                    {inventory.map(item => {
                        return (
                            <Item
                                key={item.ID}
                                ID={item.ID}
                                emoji={item.emoji}
                                item={item.item}
                                amount={item.amount}
                                setInventory={setInventory}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

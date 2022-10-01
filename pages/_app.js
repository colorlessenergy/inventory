import { useEffect } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('ID')) {
            localStorage.setItem('ID', JSON.stringify(1));
        }

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
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;

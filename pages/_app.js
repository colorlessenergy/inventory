import { useEffect } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('ID')) {
            localStorage.setItem('ID', JSON.stringify(0));
        }

        if (!localStorage.getItem('inventory')) {
            localStorage.setItem('inventory', JSON.stringify([]));
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;

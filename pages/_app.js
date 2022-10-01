import { useEffect } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (!localStorage.getItem('ID')) {
            localStorage.setItem('ID', JSON.stringify(1));
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;

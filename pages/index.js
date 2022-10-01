import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>inventory</title>
                <meta name="description" content="inventory" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <header>
                    <h1>inventory</h1>

                    <button className="yellow-button">add</button>
                </header>

                <div>
                    <div className="item mb-1">
                        <div className="text-right">
                            <button className="icon-container">
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
                                <div className="item-emoji mr-1">🍊</div>
                                <div>tangerine</div>
                            </div>
                            <div>1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

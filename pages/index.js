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
            </div>
        </div>
    );
}

import Head from 'next/head';
import Application from '../views/index';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Find a repository</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <Application />
    </div>
  );
}

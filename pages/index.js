import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    
    <div className="m-16 border-2 border-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <img src="/W&S.png" alt="Vercel" className="flex justify-start" />


      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  );
}

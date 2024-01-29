import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";


export default function Home() {

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getQuote();
  }, [])


  function getQuote(){
      fetch("https://api.chucknorris.io/jokes/random?category=dev", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.value);
          console.log(data.value);
        })
        .catch((error) => console.log(error));
  }

  return (

    <div className="m-16 border-2 border-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <img src="/W&S.png" alt="Vercel" className="flex justify-start" />
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border flex justify-center items-center">Image</div>
          <div className="p-4 border flex justify-center items-center">
            <button onClick={getQuote}> New Quote</button>
            {quote}</div>
          <div>
          </div>
        </div>


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

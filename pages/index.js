import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";


export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('/api/visitorCount')
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.count))
      .catch((error) => console.error('Error fetching visitor count:', error));

      getQuote();
  }, []);

  function getQuote() {
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
          <div className="p-4 border grid justify-center items-center">        <img src="https://www.martin-missfeldt.de/images-pictures/time-lapsed-videos/cool-chuck-norris-maschinenpistole-jeans.jpg" alt="Vercel" className="flex justify-start" /></div>
          <div className="p-4 border grid justify-center items-center">
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  mb-0 w-64 justify-self-center' onClick={getQuote}> New Quote</button>
            <div className='m-6 font-bold text-center'>{quote}</div>
          </div>
          <div>
          </div>
        </div>


      </main>

      <footer>
      <div className='grid justify-center items-center my-12 font-bold'>Visitor Count: {visitorCount}</div>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  );
}

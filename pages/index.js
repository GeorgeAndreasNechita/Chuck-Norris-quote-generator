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

    <div className="my-16 sm:mx-6 md:mx-32 lg:mx-64 xl:mx-64 2xl:mx-96 px-4 border-2 border-green-300 rounded-3xl">
      <Head>
        <title>W&S - Probearbeit - Andreas George Nechita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* W&S logo */}
        <img src="/W&S.png" alt="W&S logo" className="flex justify-start w-32 sm:w-36 md:w-36" />

        <div className="grid grid-cols-9 md:gap-4 my-4 sm:mx-16">
          {/* Col-1 Picture of Chuck Norris */}
          <div className="grid justify-center items-center col-span-4">
            <img src="https://www.knoxnews.com/gcdn/presto/2018/11/08/USAT/6eeba0d5-e387-4cd1-80bc-740dd3586b07-XXX_E_COMING_ATTRACTIONS_06_WALKER.JPG" className="h-80 flex justify-start" />
          </div>

          {/* Col-2 Quote button + Quote  */}
          <div className="grid justify-center items-center col-span-5">
            <button className='sm:w-32 md:w-40 mb-0 py-2 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded  justify-self-center' onClick={getQuote}> New Quote</button>
            <div className='m-4 sm:mx-8 md:mx-10 font-bold text-center'>{quote}</div>
          </div>
        </div>
      </main>

      <footer>
        <div className='grid justify-center items-center py-4 mt-12 mb-6 font-bold border-2 border-green-500'>Visitor Count: {visitorCount}</div>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
      
      `}</style>
    </div>
  );
}

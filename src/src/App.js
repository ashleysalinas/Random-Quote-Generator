import React from 'react';
import './App.css';
import QuoteCard from './components/quote-card';

import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState({})

  const handleFetch = () => {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-API-KEY': 'YhxsD+0FhZwTKTa0xnnveA==6JkvDf7Ys6nYUj3K'
      }
    })
    .then(response => response.json())
    .then(array => {
      setQuote(array[0])
    })
  }
  
  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className="App">
      <QuoteCard quote={quote}/>
      <button id='new-quote' onClick={handleFetch}>Click for another quote</button>
    </div>
  );
}

export default App;

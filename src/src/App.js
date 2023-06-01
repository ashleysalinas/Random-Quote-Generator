import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/quote-card';

import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=age', {
      headers: {
        'X-API-KEY': 'YhxsD+0FhZwTKTa0xnnveA==6JkvDf7Ys6nYUj3K'
      }
    })
    .then(response => response.json())
    .then(quote => {
      setQuote(quote)
      console.log(quote)
    })
  }, [])


  return (
    <div className="App">
     <QuoteCard />
    </div>
  );
}

export default App;

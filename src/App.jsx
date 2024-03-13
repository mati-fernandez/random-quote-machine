import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={handleNewQuote}>
        New quote...
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${quote} - ${author}`
        )}`}
        target="_blank"
        id="tweet-quote"
      >
        Post to X
      </a>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';

import './QuoteBox.css';

import Colors from '../constants/Colors';

const QuoteBox = () => {
  const [quoteObj, setQuoteObj] = useState({});
  const [getNewQuote, setGetNewQuote] = useState(false);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => {
        const randomInt = Math.floor(Math.random() * data.quotes.length);
        setQuoteObj(data.quotes[randomInt]);
        setGetNewQuote(false);
      });
  }, [getNewQuote]);

  const handleNewQuote = () => {
    setGetNewQuote(true);
  };

  return (
    <div id="quote-box" style={styles.quotebox}>
      <div id="text" style={styles.quote}>
        {quoteObj.quote}
      </div>
      <div id="author" style={styles.author}>
        by {quoteObj.author}
      </div>
      <div>
        <button id="new-quote" onClick={handleNewQuote} style={styles.button}>
          New quote
        </button>
      </div>
      <div style={styles.twitter}>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quoteObj.quote}" By ${quoteObj.author}`}
          target="_blank"
        >
          <LogoTwitter color={Colors.twitterLogo} fontSize="32px" />
        </a>
      </div>
    </div>
  );
};

const styles = {
  quotebox: {
    backgroundColor: 'white',
    width: '50vw',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  quote: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryLight,
    textAlign: 'center',
    textShadow: `2px 2px 2px ${Colors.primary}`,
  },
  author: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: '1.5rem',
    padding: '2rem 0',
  },
  twitter: {
    border: `2px solid ${Colors.twitterLogo}`,
    padding: '5px 20px',
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primaryLight,
    color: 'white',
    border: 'none',
    padding: 20,
    fontSize: '1rem',
    textTransform: 'uppercase',
    borderRadius: '15px',
    outline: 'none',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
};

export default QuoteBox;

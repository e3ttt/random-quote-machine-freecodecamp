import React from 'react';

import QuoteBox from './components/QuoteBox';

import Colors from './constants/Colors';

function App() {
  return (
    <div style={styles.root}>
      <QuoteBox />
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: Colors.primary,
  },
};

export default App;

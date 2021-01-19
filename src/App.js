import React from 'react';
import './App.css';
import QuotesBoxContainer from './components/quotesBox/quotesBox-container';


function App() {
  return (
    <div className="app-wrapper">
      <div className="background"></div>
      <QuotesBoxContainer />
    </div>        
  );
}

export default App;

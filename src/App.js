import React from 'react';
import Posts from "./components/Posts/Posts";
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">BREAKING NEWS</h1>
      <Posts />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <img src={logo} className="img-fluid" alt="Coulsdon Community Partnership" />
      </main>
    </>
  );
}

export default App;

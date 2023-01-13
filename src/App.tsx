import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Spinner } from './components';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<Spinner />}>
        <Outlet />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;

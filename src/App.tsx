import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header, Spinner } from './components';
import './App.scss';

const Home = React.lazy(() => import('./routes/Home'));
const Events = React.lazy(() => import('./routes/Events'));
const Guidelines = React.lazy(() => import('./routes/Guidelines'));

const GuidelinesIndex = React.lazy(() => import('./routes/GuidelinesIndex'));
const GuidelinesLogo = React.lazy(() => import('./routes/GuidelinesLogo'));
const GuidelinesIcon = React.lazy(() => import('./routes/GuidelinesIcon'));
const GuidelinesFonts = React.lazy(() => import('./routes/GuidelinesFonts'));
const GuidelinesColors = React.lazy(() => import('./routes/GuidelinesColors'));

function App() {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />}>
          </Route>
          <Route path="/guidelines" element={<Guidelines />}>
            <Route index element={<GuidelinesIndex />} />
            <Route path="logo" element={<GuidelinesLogo />} />
            <Route path="icon" element={<GuidelinesIcon />} />
            <Route path="fonts" element={<GuidelinesFonts />} />
            <Route path="colors" element={<GuidelinesColors />} />
          </Route>
        </Routes>
      </React.Suspense>
      <Footer />
    </Router>
  );
}

export default App;

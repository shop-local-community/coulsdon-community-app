import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { eventsLoader } from './routes/Events';

const App = React.lazy(() => import('./App'));
const Home = React.lazy(() => import('./routes/Home'));
const Events = React.lazy(() => import('./routes/Events'));
const Guidelines = React.lazy(() => import('./routes/Guidelines'));

const GuidelinesIndex = React.lazy(() => import('./routes/GuidelinesIndex'));
const GuidelinesLogo = React.lazy(() => import('./routes/GuidelinesLogo'));
const GuidelinesIcon = React.lazy(() => import('./routes/GuidelinesIcon'));
const GuidelinesFonts = React.lazy(() => import('./routes/GuidelinesFonts'));
const GuidelinesColors = React.lazy(() => import('./routes/GuidelinesColors'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'events',
        element: <Events />,
        loader: eventsLoader
      },
      {
        path: 'guidelines',
        element: <Guidelines />,
        children: [
          {
            index: true,
            element: <GuidelinesIndex />
          },
          {
            path: 'logo',
            element: <GuidelinesLogo />
          },
          {
            path: 'icon',
            element: <GuidelinesIcon />
          },
          {
            path: 'fonts',
            element: <GuidelinesFonts />
          },
          {
            path: 'colors',
            element: <GuidelinesColors />
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

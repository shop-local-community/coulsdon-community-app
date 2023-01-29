import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { appLoader } from './App';
import { eventsLoader } from './routes/Events';
import { eventLoader } from './routes/Event';
import { Spinner } from './components';

const App = React.lazy(() => import('./App'));
const Home = React.lazy(() => import('./routes/Home'));
const Events = React.lazy(() => import('./routes/Events'));
const Event = React.lazy(() => import('./routes/Event'));
const Guidelines = React.lazy(() => import('./routes/Guidelines'));

const GuidelinesIndex = React.lazy(() => import('./routes/GuidelinesIndex'));
const GuidelinesLogo = React.lazy(() => import('./routes/GuidelinesLogo'));
const GuidelinesIcon = React.lazy(() => import('./routes/GuidelinesIcon'));
const GuidelinesFonts = React.lazy(() => import('./routes/GuidelinesFonts'));
const GuidelinesColors = React.lazy(() => import('./routes/GuidelinesColors'));

axios.defaults.baseURL = 'https://strapi.coulsdonpartnership.org/api';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'app',
    element: <App />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'events',
        element: <Events />,
        loader: eventsLoader,
      },
      {
        path: 'events/:slug',
        element: <Event />,
        loader: eventLoader
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
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

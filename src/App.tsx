import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Footer, Header } from './components';
import { PreferenceResponse } from './schemas';
import './App.scss';

export type AppLoaderData = {
  preferences: PreferenceResponse
};

export async function appLoader(): Promise<AppLoaderData> {
  try {
    const response = await axios.get<PreferenceResponse>('/preference');
    return {
      preferences: response.data
    };
  } catch (error) {
    throw error;
  }
}

function App() {
  const { preferences } = useLoaderData() as AppLoaderData;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

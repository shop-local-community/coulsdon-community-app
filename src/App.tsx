import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Footer, Header } from "./components";
import { PreferenceResponse } from "./schemas";
import "./App.scss";

export type AppLoaderData = {
  preferences: PreferenceResponse;
};

export async function appLoader(): Promise<AppLoaderData> {
  try {
    const response = await axios.get<PreferenceResponse>(
      "/preference?populate=*"
    );
    return {
      preferences: response.data,
    };
  } catch (error) {
    throw error;
  }
}

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

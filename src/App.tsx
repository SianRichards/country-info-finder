import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from "./components/country";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <div className="App">
    <Header />
    <Country />
    </div>
  );
}

export default App;

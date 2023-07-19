import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Hero from './components/hero';
import AllItemsList from './components/itemsList';

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <AllItemsList />
        </>
    );
}

export default App;

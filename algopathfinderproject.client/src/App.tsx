import './App.css';
import React from 'react';
import Navbar from "./navbar";
import Visualizationbox from "./visualizationbox";
import Footer from "./footer";
function App() {
    return (
        <div className="app">
       
            <Navbar />
            <div className="main-content">
                <Visualizationbox />
            </div>
            <Footer/>
        </div>
    );
}

export default App;

import "./App.css"; // Import CSS
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav">
            <a href="\" className="site-title">AlgoViZ</a>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                &#9776;  
            </button>

            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li>
                    <a href="/Sorting_Algorithm">Sorting Algorithm</a>
                </li>
                <li>
                    <a href="/PathFinder">PathFinding Algorithm</a>
                </li>
            </ul>
        </nav>
    );
}


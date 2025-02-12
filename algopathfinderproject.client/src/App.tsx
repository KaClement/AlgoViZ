import './App.css';
import React, { useState } from "react";
import Navbar from "./navbar";
import VisualizationBox from "./visualizationbox";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Controls from "./controls";

export default function App() {
    const [algorithm, setAlgorithm] = useState("");

    return (
        <Router>
            <div className="app">
                <Navbar />

                <Routes>
                    {/* Default route (no controls here) */}
                    <Route
                        path="/"
                        element={
                            <div className="visualization-container">
                                <VisualizationBox />
                            </div>
                        }
                    />

                    {/* Sorting Algorithm Page */}
                    <Route
                        path="/Sorting_Algorithm"
                        element={
                            <div className="visualization-container">
                                <Controls
                                    type="Sorting"
                                    onRandomize={() => console.log("Randomizing sorting data...")}
                                    onAddWalls={() => { } /* Not used for sorting */}
                                    onAlgorithmSelect={(algo: string) => setAlgorithm(algo)}
                                />
                                <VisualizationBox />
                            </div>
                        }
                    />

                    {/* Pathfinding Algorithm Page */}
                    <Route
                        path="/PathFinder"
                        element={
                            <div className="visualization-container">
                                <Controls
                                    type="Pathfinding"
                                    onRandomize={() => { } /* Not used for pathfinding */}
                                    onAddWalls={() => console.log("Adding walls to the maze...")}
                                    onAlgorithmSelect={(algo: string) => setAlgorithm(algo)}
                                />
                                <VisualizationBox />
                            </div>
                        }
                    />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}
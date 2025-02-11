import React from "react";
import "./App.css"; // Import the CSS for styling


export default function visualizationbox() {
  return (
        <div className="visualization-box">
            <h2>Algorithm Visualization</h2>
            <p>Select an algorithm to start the visualization.</p>
            {/* The sorting or pathfinding animation will go here */}
        </div>
  );
};
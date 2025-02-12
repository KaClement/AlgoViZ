import React, { useState } from "react";
import "./App.css";

export default function Controls({ type, onRandomize, onAddWalls, onAlgorithmSelect, onStart }: any) {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

    const sortingAlgorithms = ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"];
    const pathfindingAlgorithms = ["Dijkstra's Algorithm", "A* Algorithm", "Breadth-First Search", "Depth-First Search"];

    const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAlgorithm(event.target.value);
        onAlgorithmSelect(event.target.value);
    };

    return (
        <div className="controls-container">
            <select value={selectedAlgorithm} onChange={handleAlgorithmChange} className="control-btn">
                <option value="">Select {type}</option>
                {type === "Sorting"
                    ? sortingAlgorithms.map((algo) => <option key={algo} value={algo}>{algo}</option>)
                    : pathfindingAlgorithms.map((algo) => <option key={algo} value={algo}>{algo}</option>)
                }
            </select>

            {type === "Sorting" && (
                <button className="control-btn" onClick={onRandomize}>Randomize</button>
            )}

            {type === "Pathfinding" && (
                <button className="control-btn" onClick={onAddWalls}>Add Obstacles</button>
            )}

            <button className="control-btn start-btn" onClick={onStart}>
                Start
            </button>
        </div>
    );
}

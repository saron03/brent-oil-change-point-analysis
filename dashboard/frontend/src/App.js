import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogReturnsChart from './components/LogReturnsChart';
import EventTable from './components/EventTable';
import './App.css';

function App() {
  const [logReturns, setLogReturns] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "economic", "political", "conflict"];

  useEffect(() => {
    axios.get('http://localhost:5000/api/log-returns').then(res => setLogReturns(res.data));
    axios.get('http://localhost:5000/api/change-point').then(res => setChangePoint(res.data));
    axios.get('http://localhost:5000/api/events').then(res => setEvents(res.data));
  }, []);

  const filteredEvents = events.filter(event =>
    selectedCategory === "all" || event.category === selectedCategory
  );

  return (
    <div className="App">
      <h1>Brent Oil Price Dashboard</h1>

      {logReturns.length > 0 && changePoint && (
        <div className="LineChartContainer">
          <LogReturnsChart data={logReturns} changePoint={changePoint} />
        </div>
      )}

      {/* Category Filter Buttons */}
      <div style={{ margin: '20px 0' }}>
        <strong>Filter by Category:</strong>{" "}
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              marginRight: "10px",
              backgroundColor: selectedCategory === category ? "#333" : "#eee",
              color: selectedCategory === category ? "#fff" : "#000",
              border: "none",
              padding: "6px 12px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {filteredEvents.length > 0 && (
        <EventTable events={filteredEvents} changeDate={changePoint?.change_date} />
      )}
    </div>
  );
}

export default App;

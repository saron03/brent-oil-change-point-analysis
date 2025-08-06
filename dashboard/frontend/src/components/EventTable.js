import React from 'react';

const EventTable = ({ events, changeDate }) => {
  return (
    <div>
      <h2>Key Events Near Change Point</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Days from Change</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <tr key={i}>
              <td>{event.Date.slice(0, 10)}</td>
              <td>{event['Event Name']}</td>
              <td>{event.Description}</td>
              <td>{event.Category}</td>
              <td>{event.days_diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;

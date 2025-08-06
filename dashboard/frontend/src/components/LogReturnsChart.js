import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const LogReturnsChart = ({ data, changePoint }) => {
  return (
    <div>
      <h2>Log Returns with Change Point</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="Date" tickFormatter={(d) => d.slice(0, 10)} />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="log_return" stroke="#007bff" dot={false} />
          <ReferenceLine x={changePoint.change_date} stroke="red" label="Change Point" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LogReturnsChart;

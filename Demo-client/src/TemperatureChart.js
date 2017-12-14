import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default ({ data }) => {
  return (
    <LineChart width={1600} height={1080} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="Date" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend />
      <Line type="monotone" dataKey="Mean" stroke="#8884d8" />
    </LineChart>
  );
};

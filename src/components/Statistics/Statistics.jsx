import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
  const data = [
    {name: 'AssignmentNo: 1', obtainNumber: 57},
    {name: 'AssignmentNo: 2', obtainNumber: 60},
    {name: 'AssignmentNo: 3', obtainNumber: 60},
    {name: 'AssignmentNo: 4', obtainNumber: 60},
    {name: 'AssignmentNo: 5', obtainNumber: 53},
    {name: 'AssignmentNo: 6', obtainNumber: 54},
    {name: 'AssignmentNo: 7', obtainNumber: 58},
    {name: 'AssignmentNo: 8', obtainNumber: 50},
  ];
  return (
    <div className='stat-container' >
    <h2>Assignment Analytics</h2>
    <ResponsiveContainer>
    <PieChart >
      <Pie
       dataKey="obtainNumber"
        isAnimationActive={true}
        data={data}
        // cx={600}
        // cy={200}
        outerRadius={100}
        fill="#8884d8"
        label 
       />
     <Tooltip/>
    </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
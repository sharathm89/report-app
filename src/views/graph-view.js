import React from 'react';
import { PieChart, Pie } from 'recharts';

import Title from './components/title';
import MainCard from './components/main-card';

function GraphView() {
  const data1 = [
    { name: 'Group A', value: 125, fill: "green" },
    { name: 'Group B', value: 500, fill: "grey" },
  ];

  const data2 = [
    { name: 'Group A', value: 20 },
    { name: 'Group B', value: 5 },
    { name: 'Group C', value: 20 },
    { name: 'Group D', value: 20 },
    { name: 'Group E', value: 10 },
    { name: 'Group F', value: 10 },
    { name: 'Group G', value: 10 },
    { name: 'Group H', value: 5 }
  ];

  const data3 = [
    { name: 'Group A', value: 400, fill: "pink" },
    { name: 'Group B', value: 500, fill: "grey" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0 10px" }}>
      <Title name="Graph" />

      <div style={{ display: "flex", flexDirection: "row", columnGap: "10px", padding: "0 10px", marginTop: "24px" }}>
        <MainCard title="Graph 1" sx={{ flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PieChart width={225} height={200}>
              <Pie data={data1} dataKey="value" cx="50%" cy="45%" innerRadius={50} outerRadius={80} isAnimationActive={false} />
            </PieChart>

            <div style={{ color: "black", fontSize: '20px', display: "flex", flexDirection: "row", columnGap:"5px", marginBottom: "20px" }}>
              <div style={{ fontWeight: 600 }}>125</div>
              <div>/</div>
              <div>500</div>
            </div>
          </div>
        </MainCard>


        <MainCard title="Graph 2" sx={{ flex: 1 }}>
          <PieChart width={225} height={225}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data2}
              cx="50%"
              cy="45%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              label
            >
            </Pie>
          </PieChart>
        </MainCard>

        <MainCard title="Graph 3" sx={{ flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PieChart width={225} height={200}>
              <Pie data={data3} dataKey="value" cx="50%" cy="45%" innerRadius={50} outerRadius={80} isAnimationActive={false} />
            </PieChart>

            <div style={{ color: "black", fontSize: '20px', display: "flex", flexDirection: "row", columnGap:"5px", marginBottom: "20px" }}>
              <div style={{ fontWeight: 600 }}>400</div>
              <div>/</div>
              <div>500</div>
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
}

export default GraphView;

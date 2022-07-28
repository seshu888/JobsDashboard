import React, { useState } from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
} from "recharts";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  margin-top: 2rem;
  .btn {
    margin-right: 2rem;
  }
  .active {
    padding: 1rem;
  }
`;

const StatsCharts = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <div>
        <button
          className={barChart ? "btn active" : "btn"}
          onClick={() => setBarChart(true)}
        >
          Bar Chart
        </button>
        <button
          className={!barChart ? "btn active" : "btn"}
          onClick={() => setBarChart(false)}
        >
          Area Chart
        </button>
      </div>
      {barChart ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 50 }}>
            <CartesianGrid strokeDasharray="10 10 " />
            <XAxis dataKey="date" />
            <YAxis  />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" barSize={75} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1e3a8a"
              fill="#3b82f6"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Wrapper>
  );
};

export default StatsCharts;

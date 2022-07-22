import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "mon",
    AQI: "1",
  },
  {
    name: "tue",
    AQI: "2",
  },
  {
    name: "wed",
    AQI: "5",
  },
  {
    name: "thu",
    AQI: "3",
  },
  {
    name: "fri",
    AQI: "4",
  },
];

const Chart = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis domain={[1, 5]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="AQI"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

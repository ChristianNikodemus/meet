import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EventNumber = ({ locations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  }, [locations, events]);

  const getData = () => {
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 40,
          bottom: 20,
          left: 0,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="city" />
        <YAxis
          type="number"
          dataKey="number"
          name="number of events"
          allowDecimals={false}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill="#1a659e" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default EventNumber;

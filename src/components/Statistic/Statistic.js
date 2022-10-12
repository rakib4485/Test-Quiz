import React from "react";
import { Tooltip } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Statistic = () => {
  const datas = useLoaderData();
  const data = datas.data;

  return (
    <div>
      <h3>This is Statistic</h3>
      <div style={{ margin: "0px auto" }}>
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          style={{margin: "0 auto", marginTop: '50px'}}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistic;

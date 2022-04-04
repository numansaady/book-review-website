import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const Dashboard = () => {
  const [chart, setChart] = useState([]);
  console.log(chart);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Monthly Sell Report</h2>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                width={500}
                height={300}
                data={chart}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sell"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
            <h2>Investment and Revenue Report</h2>
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart
                width={500}
                height={400}
                data={chart}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Investment Report in BarChart</h2>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                width={500}
                height={300}
                data={chart}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
            <h2>Pie Chart</h2>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart width={400} height={400}>
                <Pie
                  data={chart}
                  dataKey="investment"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={chart}
                  dataKey="revenue"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

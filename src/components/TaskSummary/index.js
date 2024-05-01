import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const TaskSummary = ({ assignObj }) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={assignObj}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="task"
            tick={{
              stroke: "yellow",
              strokeWidth: 1,
            }}
          />
          <YAxis
          dataKey={0}
            tick={{
              stroke: "pink",
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="status" name="Pending" fill="#1f77b4" barSize="20%" />
          <Bar
            dataKey="In Progress"
            name="In Progress"
            fill="#fd7f0e"
            barSize="20%"
          />
          <Bar
            dataKey="Completed"
            name="Completed"
            fill="#000000"
            barSize="20%"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default TaskSummary;
  
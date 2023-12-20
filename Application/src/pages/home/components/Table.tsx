import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

interface GoogleTableProps {
  data: any[]; // Array of objects with different structures
  title: string;
}

const Table: React.FC<GoogleTableProps> = ({ data, title }) => {
  const [chartData, setChartData] = useState<Array<any>>([]);

  useEffect(() => {
    // Convert the data to Google Charts Table format
    const formattedData: Array<any> = [];

    if (data.length > 0) {
      const keys = Object.keys(data[0]);

      // Add header row
      formattedData.push(keys);

      // Add data rows
      data.forEach((item) => {
        const row = keys.map((key) => item[key]);
        formattedData.push(row);
      });
    }

    setChartData(formattedData);
  }, [data]);

  return (
    <div>
      <Chart
        width={"100%"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          showRowNumber: true,
          title: title,
          page: "enable", // Enable pagination
          pageSize: 10, // Set the number of rows per page
        }}
      />
    </div>
  );
};

export default Table;

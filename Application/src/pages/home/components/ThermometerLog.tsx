import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

interface TemperatureDataItem {
  temperature: number;
  thermometer_id: string;
  timestamp: string;
}

interface TemperatureChartProps {
  temperatureData: TemperatureDataItem[];
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({
  temperatureData,
}) => {
  const [thermometerIds, setThermometerIds] = useState<string[]>();
  const [thermometerId, setThermometerId] = useState<string>("Office1");
  const [dates, setDates] = useState<string[]>();
  const [date, setDate] = useState<string>(
    new Date(temperatureData[0].timestamp).toISOString().split("T")[0]
  );
  const [data, setData] = useState<TemperatureDataItem[]>();

  //filter data by thermometer id and date
  useEffect(() => {
    setData(
      temperatureData.filter((item) => {
        const itemDate = new Date(item.timestamp).toISOString().split("T")[0];
        return itemDate === date && item.thermometer_id === thermometerId;
      })
    );
    console.log(data);
  }, [date, thermometerId]);

    // prepare chart data
  const chartData: Array<any> = [["Time", "Temperature"]];
  data?.forEach(({ timestamp, temperature }) => {
    chartData.push([new Date(timestamp), temperature]);
  });

  //extract available thermometer ids and dates into lists
  useEffect(() => {
    setThermometerIds([
      ...new Set(temperatureData.map((item) => item.thermometer_id)),
    ]);
    setDates([
      ...new Set(
        temperatureData.map(
          (item) => new Date(item.timestamp).toISOString().split("T")[0]
        )
      ),
    ]);
  }, [temperatureData]);

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="dropdown justify-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {thermometerId}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {thermometerIds?.map((thermometerId) => (
              <li key={thermometerId}>
                <a onClick={() => setThermometerId(thermometerId)}>
                  {thermometerId}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown justify-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {date}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {dates?.map((date) => (
              <li key={date}>
                <a onClick={() => setDate(date)}>{date}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "Temperature Over Time",
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "Temperature (°C)",
            },
          }}
        />
      </div>
    </div>
  );
};

export default TemperatureChart;

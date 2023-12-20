import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

interface DailyEmailItem {
  log_date: string;
  [key: string]: number | string;
}

interface DailyEmailChartProps {
  dailyEmailData: DailyEmailItem[];
}

const DailyEmailLog: React.FC<DailyEmailChartProps> = ({ dailyEmailData }) => {
  const [months, setMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date(dailyEmailData[0].log_date).toLocaleString("default", {
      month: "long",
    })
  );
  const [data, setData] = useState<DailyEmailItem[]>();

  // Extract available months into a list
  useEffect(() => {
    setMonths([
      ...new Set(
        dailyEmailData.map((item) =>
          new Date(item.log_date).toLocaleString("default", {
            month: "long",
          })
        )
      ),
    ]);
  }, [dailyEmailData]);

  // Filter data by month
  useEffect(() => {
    if (selectedMonth) {
      setData(
        dailyEmailData.filter((item) => {
          const itemMonth = new Date(item.log_date).toLocaleString("default", {
            month: "long",
          });
          return itemMonth === selectedMonth;
        })
      );
    }
  }, [selectedMonth, dailyEmailData]);

  const chartData: Array<any> = [
    [
      "Date",
      "Employee 1",
      "Employee 2",
      "Employee 3",
      "Employee 4",
      "Employee 5",
    ],
  ];
  data?.forEach(({ log_date, ...employees }) => {
    chartData.push([new Date(log_date), ...Object.values(employees)]);
  });

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="dropdown justify-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {selectedMonth || "Select Month"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {months?.map((month) => (
              <li key={month}>
                <a onClick={() => setSelectedMonth(month)}>{month}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="ColumnChart" /* Change chartType to "ColumnChart" */
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "Daily Email Activity",
            hAxis: {
              title: "Date",
            },
            vAxis: {
              title: "Number of Emails",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DailyEmailLog;

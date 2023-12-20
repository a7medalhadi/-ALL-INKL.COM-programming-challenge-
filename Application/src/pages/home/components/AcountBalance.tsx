import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

interface AccountBalanceItem {
  balance_date: string;
  balance: string;
}

interface TemperatureChartProps {
  acountBalanceData: AccountBalanceItem[];
}

const AccountBalance: React.FC<TemperatureChartProps> = ({
  acountBalanceData,
}) => {
  const [months, setMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("January");
  const [data, setData] = useState<AccountBalanceItem[]>();

  // Extract available months into a list
  useEffect(() => {
    setMonths([
      ...new Set(
        acountBalanceData.map((item) =>
          new Date(item.balance_date).toLocaleString("default", {
            month: "long",
          })
        )
      ),
    ]);
  }, [acountBalanceData]);

// // Filter data by month
  useEffect(() => {
    if (selectedMonth) {
      setData(
        acountBalanceData.filter((item) => {
          const itemMonth = new Date(item.balance_date).toLocaleString(
            "default",
            { month: "long" }
          );
          return itemMonth === selectedMonth;
        })
      );
    }
  }, [selectedMonth, acountBalanceData]);

  // prepare chart data
  const chartData: Array<any> = [["Time", "Balance"]];
  data?.forEach(({ balance_date: balance_Date, balance }) => {
    chartData.push([new Date(balance_Date), parseInt(balance, 10)]);
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
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "Balance Over Time",
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "balance",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AccountBalance;

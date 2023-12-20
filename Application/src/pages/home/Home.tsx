import { useEffect, useState } from "react";
import TemperatureChart from "./components/ThermometerLog";
import { useAccountBalance, useDailyEmail, useThermometerLog } from "./hooks";
import AccountBalance from "./components/AcountBalance";
import DailyEmailLog from "./components/DailyEmailLog";
import Table from "./components/Table";

export const Home = () => {
  const {
    isLoading: loadingThermo,
    data: thermoData,
    refetch: loadThermometerData,
  } = useThermometerLog();
  const {
    isLoading: loadingBalance,
    data: balanceData,
    refetch: loadAcountBalance,
  } = useAccountBalance();
  const {
    isLoading: loadingMailing,
    data: mailingData,
    refetch: loadDailyEmail,
  } = useDailyEmail();

  const [selectedValue, setSelectedValue] = useState("AC_Thermometer_Log");

  if (loadingBalance || loadingMailing || loadingThermo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" flex items-center justify-center">
        <div className="dropdown justify-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {selectedValue}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  loadThermometerData();
                  setSelectedValue("AC_Thermometer_Log");
                }}
              >
                AC_Thermometer_Log
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  loadAcountBalance();
                  setSelectedValue("Daily_Account_Balance");
                }}
              >
                Daily_Account_Balance
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  loadDailyEmail();
                  setSelectedValue("Daily_Email_Log");
                }}
              >
                Daily_Email_Log
              </a>
            </li>
          </ul>
        </div>
      </div>

      {selectedValue === "Daily_Account_Balance" && (
        <div>
          <AccountBalance acountBalanceData={balanceData} />
          <div className=" flex flex-col justify-center items-center">
            <Table data={balanceData} title={selectedValue} />
          </div>
        </div>
      )}
      {selectedValue === "AC_Thermometer_Log" && (
        <div>
          <TemperatureChart temperatureData={thermoData} />
          <div className=" flex flex-col justify-center items-center w-[100%]">
            <Table data={thermoData} title={selectedValue} />
          </div>
        </div>
      )}
      {selectedValue === "Daily_Email_Log" && (
        <div>
          <DailyEmailLog dailyEmailData={mailingData} />
          <div className=" flex flex-col justify-center items-center">
            <Table data={mailingData} title={selectedValue} />
          </div>
        </div>
      )}
    </div>
  );
};

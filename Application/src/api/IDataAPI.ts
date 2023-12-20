export interface IDataAPI {
    getThermometerLog: () => Promise<any>;
    getDailyAccountBalance: () => Promise<any>;
    getDailyEmailLog: () => Promise<any>;
  }
  
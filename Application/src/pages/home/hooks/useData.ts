import { useQuery } from "react-query";
import { SERVICES_TYPES, useInjection } from "../../../ioc";
import { IDataAPI } from "@/api/IDataAPI";

export const useThermometerLog = () => {
    const dataAPI = useInjection<IDataAPI>(SERVICES_TYPES.DATA);
    return useQuery("thermo", () => dataAPI.getThermometerLog());
  };

  export const useAccountBalance = () => {
    const dataAPI = useInjection<IDataAPI>(SERVICES_TYPES.DATA);
    return useQuery("balance", () => dataAPI.getDailyAccountBalance(),{
        enabled:false
    });
  };

  export const useDailyEmail = () => {
    const dataAPI = useInjection<IDataAPI>(SERVICES_TYPES.DATA);
    return useQuery("email", () => dataAPI.getDailyEmailLog(),{
        enabled:false
    });
  };
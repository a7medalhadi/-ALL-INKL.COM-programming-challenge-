import { inject, injectable } from "inversify";
import { SERVICES_TYPES } from "../ioc/SERVICES_TYPES";
import { HttpClient } from "../services/client";
import { IDataAPI } from "./IDataAPI";


@injectable()
export class dataAPI implements IDataAPI { 
    @inject(SERVICES_TYPES.HTTP_CLIENT)
    private client: HttpClient;
    private readonly baseUrl = "/data";

    async getThermometerLog (): Promise<any>{
        const data =  await this.client.get<any>(`${this.baseUrl}/thermometerLog`);
        console.log(data.data);
        return data.data;
    }
    async getDailyAccountBalance():Promise<any> {
        const data =  await this.client.get<any>(`${this.baseUrl}/dailyAccountBalance`);
        console.log(data.data);
        return data.data;
    }

   async getDailyEmailLog (): Promise<any> {
    const data =  await this.client.get<any>(`${this.baseUrl}/dailyEmailLog`);
    return data.data;
   }
}
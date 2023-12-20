import { Container } from "inversify";
import { dataAPI, IDataAPI } from "../api";
import { HttpClient, HttpClientFactory } from "../services/client";
import { IConfigService, ConfigService, AppConfig } from "../services/config";
import "reflect-metadata";


import { SERVICES_TYPES } from "./SERVICES_TYPES";

const container = new Container();

// Config
const configService: IConfigService = new ConfigService();
const configs = configService.bind();
container.bind<AppConfig>(SERVICES_TYPES.CONFIGURATIONS).toConstantValue(configs);
 

// Http Client
const httpFactory = new HttpClientFactory(configs);
const httpClient = httpFactory.create();
container.bind<HttpClient>(SERVICES_TYPES.HTTP_CLIENT).toConstantValue(httpClient);


// Data
container.bind<IDataAPI>(SERVICES_TYPES.DATA).to(dataAPI);



export { container };

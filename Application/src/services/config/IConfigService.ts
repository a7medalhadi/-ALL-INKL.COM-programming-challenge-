/* eslint-disable no-unused-vars */
import { AppConfig } from "./AppConfig";

export interface IConfigService {
  get: (key: string) => string;
  bind: () => AppConfig;
}

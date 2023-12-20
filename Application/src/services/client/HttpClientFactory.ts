import axios from "axios";
import { HttpClient } from "./HttpClient";
import { AppConfig } from "../config";

export class HttpClientFactory {
  constructor(private configs: AppConfig) {}

  create(): HttpClient {
    const instance = axios.create({
      baseURL: this.configs.platformUri
    });
    return instance;
  }
}

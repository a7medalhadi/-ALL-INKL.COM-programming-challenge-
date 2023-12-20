import { injectable } from "inversify";
import { AppConfig } from "./AppConfig";
import { IConfigService } from "./IConfigService";

@injectable()
export class ConfigService implements IConfigService {
  bind(): AppConfig {
    return {
      platformUri: this.get("PLATFORM_URI"),
    };
  }

  get(key: string): string {
    let extractedKey: string = key;
    if (!extractedKey.startsWith("REACT_APP_")) {
      extractedKey = `REACT_APP_${key}`;
    }
    const value = process.env[extractedKey];
    if (value) {
      return value;
    }
    throw new Error(`No config value for key ${key}`);
  }
}

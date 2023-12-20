import { Axios } from "axios";
import { injectable } from "inversify";

@injectable()
export class HttpClient extends Axios {}

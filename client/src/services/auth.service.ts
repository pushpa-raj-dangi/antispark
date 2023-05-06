import { baseUrl } from "../constants/constants";
import httpClient from "./http-client";
class AuthService {
  public async login(data) {
    return await httpClient.post(baseUrl + "account/login", data);
  }

  public async register(data) {
    return await httpClient.post(baseUrl + "account/register", data);
  }
}
let authService = new AuthService();

export default authService;

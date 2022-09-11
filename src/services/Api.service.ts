import { api } from "../utils/apiUtils";

abstract class ApiService {
  async get(url: string): Promise<any> {
    return new Promise((res, rej) => {
      api
        .get(url)
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}

export default ApiService;

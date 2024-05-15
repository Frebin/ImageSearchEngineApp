import { commonUrlConfig } from "./Http.config";

export const _get = (url) => apiRequest(url, "GET", null);
export const _post = (url, payload) => apiRequest(url, "POST", payload);
export const _put = (url, payload) => apiRequest(url, "PUT", payload);

const apiRequest = async (url, method, payload) => {
  let response;
  if (method === "GET") {
    response = await commonUrlConfig.get(url);
  } else if (method === "POST") {
    response = await commonUrlConfig.post(url, payload);
  } else if (method === "PUT") {
    response = await commonUrlConfig.put(url, payload);
  }
  return response;
};

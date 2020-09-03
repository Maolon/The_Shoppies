import { Methods } from "./const";

/**
 * @file API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParam - interface bodyParam
 * @return res.json
 * @thorws promise res
 * */

export const fetch_API = async (url: string, method: Methods) => {
  const res = await fetch(url, {
    method: method,
    mode: "cors",
  });
  if (res.ok) return res.json();

  throw res;
};

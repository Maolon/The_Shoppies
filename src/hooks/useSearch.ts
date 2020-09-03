import { useEffect, useState } from "react";
import { HOST, Methods } from "../api/const";
import { initialState } from "./nomReducer";
import { fetch_API } from "../api/api";
import { message } from "antd/es";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    const SEARCH_URL = `${HOST}?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&r=json`;
    const fetchResult = async () => {
      try {
        await Promise.race([
          fetch_API(SEARCH_URL, Methods.get).then((val) => {
            console.log(val);
            if (val.Response !== "False") setResult({ data: val.Search });
            else setResult({ data: [] });
          }),
          new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, "TimeOut");
          }),
        ]);
      } catch (err) {
        console.log(err);
        message.error("Network Error");
      }
    };
    fetchResult();
  }, [search]);

  return{result,setSearch,search }
};

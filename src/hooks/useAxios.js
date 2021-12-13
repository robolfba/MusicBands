import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await axios(url);
        if (!res) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "An error occurred" : res.statusText,
          };
        }
        setIsPending(false);
        setData(res.data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };
    getData(url);
  }, [url]);
  return { data, isPending, error };
};

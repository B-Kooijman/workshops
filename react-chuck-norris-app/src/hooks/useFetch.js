import { useEffect, useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";

const baseUrl = config.randomFactUrl;
const defaultUrl = baseUrl + "food";

const useFetch = (category) => {

  //this could be improved. 
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const url = category ? baseUrl + category : defaultUrl;

  //async way to use useEffect in custom hook.
  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      setError();
      setTimeout(async () => {

      await fetchResult(url)
        .then((response) => {
            setResult(response);
      })
        .catch((error) => {
            setResult();
            setError(error.message);
        })
        .finally(() => {
            setError();
            setLoading(false);
        });

      }, 5000) //delay
    };

      getResult();
  }, [url]);

  return { result, loading, error }; // return value
};

export default useFetch;

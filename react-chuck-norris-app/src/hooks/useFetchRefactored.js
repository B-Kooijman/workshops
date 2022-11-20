import { useEffect, useRef, useState } from "react";
import { fetchResult } from "../utils/fetchResult";
import config from "../config";
import useView from "./useView";
// import useViewReducer from "./useViewReducer";

const baseUrl = config.randomFactUrl;
const defaultUrl = baseUrl + "food";

const useFetchRefactored = (category) => {
  console.log("executed: useFetchRefactored")
  const url = category ? baseUrl + category : defaultUrl;
  
  const [result, setResult] = useState();
  const [status, { setSuccessView, setLoadingView, setErrorView }] = useView();
  //const {status, setSuccessView, setLoadingView, setErrorView } = useViewReducer();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const getResult = async () => {
      setLoadingView();
      setTimeout(async () => {
        await fetchResult(url)
          .then((response) => {
            if (isMounted.current) {
              setResult(response);
              setSuccessView();
            }
          })
          .catch((error) => {
            if (isMounted.current) {
              setResult();
              setErrorView(error);
            }
          });
      }, 1000);
    };

    getResult();

    return () => {
      isMounted.current = false;
    };

    // remove the setters from the dependency array below and look at the warning.
  }, [url, setErrorView, setLoadingView, setSuccessView]);

  return { result, status };
};

export default useFetchRefactored;
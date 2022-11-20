import { useState } from "react";
import Result from "../_shared/Result";
import { fetchResult } from "../../utils/fetchResult";
import config from "../../config";

const url = config.randomFactUrl + "sport";

const viewState = {
  SUCCESS: "success", 
  LOADING: "loading",
  ERROR: "error"
}

const StateEnum = () => {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState(viewState.SUCCESS);

  async function clickHandler() {
    setStatus(viewState.LOADING);
    await fetchResult(url)
      .then((response) => {
        setResult(response);
        setStatus(viewState.SUCCESS);
      })
      .catch((error) => {
        console.error(error); 
        setStatus(viewState.ERROR);
      })
  }

  return (
    <div className="box">
      <button onClick={clickHandler}>Show me a fact</button>
      {status === viewState.SUCCESS && <Result {...result} />}
      {status === viewState.LOADING  && <strong>Loading.. </strong>}
      {status === viewState.ERROR  && <strong>Something went wrong</strong>}
    </div>
  );
};

export default StateEnum;

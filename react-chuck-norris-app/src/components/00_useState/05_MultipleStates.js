import { useState } from "react";
import Result from "../_shared/Result";
import { fetchResult } from "../../utils/fetchResult";
import config from "../../config";

const url = config.randomFactUrl + "sport";

const MultipleStates = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Do you notice the error made here?
  async function clickHandler() {
    setLoading(true);
    await fetchResult(url)
      .then((response) => {
        setResult(response)
        setLoading(false)
      })
      .catch(() => {
        console.error(error); 
        setError(true)})
  }

  return (
    <div className="box">
      <button onClick={clickHandler}>Show me a fact</button>
      {result && <Result {...result} />}
      {loading && <strong>Loading.. </strong>}
      {error && <strong>Something went wrong</strong>}
    </div>
  );
};

export default MultipleStates;

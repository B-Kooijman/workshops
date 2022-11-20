import { useState, useRef } from "react";
import { viewState } from "../../hooks/useView";
import useFetchRefactored from "../../hooks/useFetchRefactored";

const FactOnSubmitRefactored = () => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState();
  const { result, status } = useFetchRefactored(inputRef.current?.value);
  const submitHandler = () => setSearchText(inputRef.current?.value);

  return (
    <div className="box">
      <input ref={inputRef} />
      <button onClick={submitHandler}>Search for category</button>

      {status === viewState.SUCCESS && <p>{result.value}</p>}
      {status === viewState.LOADING && <strong>Loading.. </strong>}
      {status === viewState.ERROR && <strong>Something went wrong</strong>}
      
      {searchText && <p>you searched for:{inputRef.current.value}</p>}
    </div>
  );
};

export default FactOnSubmitRefactored;

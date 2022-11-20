import { useState } from "react";
import Result from "../_shared/Result";
import StatusMessage from "../_shared/StatusMessage";
import useFetch from "../../hooks/useFetch";

const FactOnInput = () => {
  const [searchText, setSearchText] = useState();
  const { result, loading, error } = useFetch(searchText); //custom hook

  function inputHandler(event) {
    if (event.target?.value?.length > 2) {
      setSearchText(event.target.value);
    }
  }

  return (
    <>
      {result && <Result {...result} />}
      <input
        type="search"
        placeholder="Give me a fact about"
        onChange={inputHandler} // this is a synthetic event.
      />
      <StatusMessage loading={loading} error={error} />
    </>
  );
};

export default FactOnInput;

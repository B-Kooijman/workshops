import Result from "../_shared/Result";
import useFetch from "../../hooks/useFetch";

const FactOnUrl = (props) => {
  console.log("react router", props);
  const queryStringValue = props.match.params.category
  const { result, loading, error } = useFetch(queryStringValue);

  return (
    <div className="box">
      {result && <Result {...result} />}
      {loading && <strong>Loading.. </strong>}
      {error === "error" && <strong>Something went wrong</strong>}

      {queryStringValue && <p>you searched for:{queryStringValue}</p>}
    </div>
  );
};

export default FactOnUrl;

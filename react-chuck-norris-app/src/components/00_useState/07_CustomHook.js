import Result from "../_shared/Result";
import { fetchResult } from "../../utils/fetchResult";
import config from "../../config";
import useResult from "../../hooks/useResult";
import useView, { viewState } from "../../hooks/useView";

const url = config.randomFactUrl + "sport";

const CustomHook = () => {
  // Encapsulation.
  // Naming convention for eslint.
  const [result, setResult] = useResult();
  const [status, { setSuccessView, setLoadingView, setErrorView }] = useView(viewState.SUCCESS);

  async function clickHandler() {
    setLoadingView();
    await fetchResult(url)
      .then((response) => {
        setResult(response);
        setSuccessView();
      })
      .catch((error) => {
        setErrorView(error); // passing arguments.
      });
  }

  return (
    <div className="box">
      <button onClick={clickHandler}>Show me a fact</button>
      {status === viewState.SUCCESS && <Result {...result} />}
      {status === viewState.LOADING && <strong>Loading.. </strong>}
      {status === viewState.ERROR && <strong>Something went wrong</strong>}
    </div>
  );
};

export default CustomHook;

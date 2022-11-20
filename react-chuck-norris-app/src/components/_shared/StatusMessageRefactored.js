import { viewState } from "../../hooks/useView";

const StatusMessageRefactored = ({ result, status }) => (
  <>
    {status === viewState.SUCCESS && <p>{result.value}</p>}
    {status === viewState.LOADING && <strong>Loading.. </strong>}
    {status === viewState.ERROR && <strong>Something went wrong</strong>}
  </>
);

export default StatusMessageRefactored;

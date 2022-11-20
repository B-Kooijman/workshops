const StatusMessage = ({ loading, error }) => (
  <>
    {loading && <strong>Aan het laden..</strong>}
    {error && error}
  </>
);

export default StatusMessage;

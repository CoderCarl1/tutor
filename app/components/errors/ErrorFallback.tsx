export default function ErrorFallback() {
  // ({
  //   error,
  //   resetErrorBoundary,
  // }: {
  //   error: Error;
  //   resetErrorBoundary: React.Dispatch<React.SetStateAction<t>>;
  // }) {
  return (
    <div role="alert">
      <h2>Something Went Wrong!</h2>
      {/* <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reload</button> */}
    </div>
  );
}

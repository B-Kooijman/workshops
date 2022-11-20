import { useReducer } from "react";

export const viewState = {
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
};

function viewReducer(state, action) {
  console.log("currentState", state);

  switch (action.type) {
    case viewState.SUCCESS: {
      // return {status: viewState.ERROR} Also works, but not immutability friendly!
      return { ...state, status: viewState.SUCCESS };
    }
    case viewState.LOADING: {
      return { ...state, status: viewState.LOADING };
    }
    case viewState.ERROR: {
      console.error(action.message);
      return { ...state, status: viewState.ERROR };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

//const setError = (data) => ({ type: viewState.ERROR, message: data.message });

function useViewReducer({ reducer = viewReducer } = {}) {
  const [{ status }, setView] = useReducer(reducer, {
    status: viewState.LOADING,
  });

  const setSuccessView = () => setView({ type: viewState.SUCCESS }); // this is a dispatch function!
  const setLoadingView = () => setView({ type: viewState.LOADING });
  const setErrorView = (error) => setView({type: viewState.ERROR, message: error.message});
  // const setErrorView = (error) => setView(setError(error.message)); // this is another abstraction for declaring the actions.

  return { status, setSuccessView, setLoadingView, setErrorView };
}

export default useViewReducer;

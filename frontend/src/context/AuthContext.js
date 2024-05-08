import { createContext, useEffect, useReducer } from "react";

// Initial state for the authentication context
const initial_state = {
  // Initialize user state by checking local storage
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.stringify(localStorage.getItem("user"))
      : null,
  loading: false,
  error: null,
  // user: localStorage.getItem("user") !== undefined ? localStorage.getItem("user") : null,
  // user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")): null, loading: false, error: null,
};

// Create the authentication context
export const AuthContext = createContext(initial_state);

// Reducer function for handling authentication actions
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      // Set loading state when login process starts
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      // Set user state when login is successful
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      // Set error state when login fails
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      // Set state after successful registration
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      // Clear user state on logout
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// Authentication context provider component
export const AuthContextProvider = ({ children }) => {
  // UseReducer hook to manage state with the AuthReducer function
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // Effect to update local storage when user state changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    // Provide the authentication context value to its children
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch, // Provide dispatch function for updating state
      }}
    >
      {children} {/* Render the children components */}
    </AuthContext.Provider>
  );
};

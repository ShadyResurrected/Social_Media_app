import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "6396b68c0b8f7dd4e8151a78",
    username: "JohnDoe",
    email: "John@gmail.com",
    password: "$2b$10$bXGeFOUF6Jn5cRQnrp2qzO1LsRzW9VrEkE1XA13L2b1EUJ1gMtRr.",
    profilePicture: "",
    coverPicture: "",
    followers: ["6396b6990b8f7dd4e8151a7a"],
    following: [],
    isAdmin: false,
    createdAt: "2022-12-12T05:05:16.120Z",
    updatedAt: "2022-12-12T08:17:46.228Z",
    __v: 0,
    desc: "Hello there! My name is John Doe",
    city: "New York",
    from: "Melbourne",
    relationship: "0",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

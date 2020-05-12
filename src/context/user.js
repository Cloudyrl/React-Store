import React, { useState } from "react";

export const UserContext = React.createContext();

const getUserFromLocalStorage = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { username: null, token: null };
  };


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser({ username: null, token: null });
    localStorage.remove("user");
  };

  return <UserContext.Provider value={{user,login,logout}}>{children}</UserContext.Provider>;
};

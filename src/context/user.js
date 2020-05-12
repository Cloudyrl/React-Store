import React, { useState } from "react";

export const UserContext = React.createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user")
  };

  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ msg,show: true, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};

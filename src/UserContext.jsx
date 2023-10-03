import React, { useState, useEffect } from "react";
import { createContext } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(1);
  const [userName, setUserName] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        data,
        setData,
        cartData,
        setCartData,
        categoryData,
        setCategoryData,
        userName,
        setUserName,
        total,
        setTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
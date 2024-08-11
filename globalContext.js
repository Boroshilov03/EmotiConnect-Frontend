import React, { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

// Function to save tokens and user data
const saveData = async (tokenData, userData) => {
  try {
    await SecureStore.setItemAsync("accessToken", tokenData.access);
    await SecureStore.setItemAsync("refreshToken", tokenData.refresh);
    await SecureStore.setItemAsync("userData", JSON.stringify(userData));
  } catch (error) {
    console.error("Error saving data to SecureStore", error);
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userObj, setUserObj] = useState(null);
  const [initialized, setInitialized] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const setToken = async (tokenData) => {
    await saveData(tokenData.token, tokenData.user);
  };

  const globalContext = {
    userObj,
    setUserObj,
    initialized,
    setInitialized,
    authenticated,
    setAuthenticated,
    setToken,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};

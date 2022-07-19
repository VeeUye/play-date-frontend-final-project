import React, { createContext, useContext, useState } from "react";

const InviteContext = createContext();

// eslint-disable-next-line react/prop-types
export const InviteContextProvider = ({ children }) => {
  const [acceptedResponse, setAcceptedResponse] = useState();

  return (
    <InviteContext.Provider value={{ acceptedResponse, setAcceptedResponse }}>
      {children}
    </InviteContext.Provider>
  );
};

export const InviteResponse = () => {
  return useContext(InviteContext);
};

import React from "react";

export const GroupContext = React.createContext();

const GroupContextProvider = ({ children }) => {
  const [productGroups, setProductGroups] = React.useState(null);

  const updateProductGroups = (data) => {
    setProductGroups(data);
  };
  return (
    <GroupContext.Provider value={{ productGroups, updateProductGroups }}>
      {children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;

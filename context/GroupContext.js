import React from "react";

export const GroupContext = React.createContext();

const GroupContextProvider = ({ children }) => {
  const [productGroups, setProductGroups] = React.useState(null);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    if (!hydrated) {
      try {
        const a = JSON.parse(localStorage.getItem("productGroups"));
        setProductGroups(a);
      } catch (error) {
        console.log(error.message);
      } finally {
        setHydrated(true);
      }
    } else {
      console.log("re-rendering", productGroups);
      localStorage.setItem("productGroups", JSON.stringify(productGroups));
    }
  });

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

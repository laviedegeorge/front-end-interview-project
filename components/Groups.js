import React from "react";
import { GroupContext } from "../context/GroupContext";
import GroupContainer from "../components/GroupContainer";
import Loader from "./Loader";

const Groups = () => {
  const { productGroups, updateProductGroups } = React.useContext(GroupContext);

  const getData = () => {
    const url =
      "https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6";

    fetch(url)
      .then((res) => res.json())
      .then((data) => updateProductGroups(data.aisle.groups))
      .catch((error) => {
        console.error(error.message);
        updateProductGroups("Error");
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {productGroups === null ? (
        <Loader text="Loading ... " />
      ) : productGroups === "Error" ? (
        <Loader text="Something went wrong. Try Aagin!!!" type="Error" />
      ) : (
        productGroups.map((group) => {
          return <GroupContainer key={group.id} group={group} />;
        })
      )}
    </>
  );
};

export default Groups;

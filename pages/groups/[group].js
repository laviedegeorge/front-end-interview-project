import React from "react";
import { useRouter } from "next/router";
import { ArrowLeft } from "react-feather";
import GroupContextProvider, { GroupContext } from "../../context/GroupContext";
import Loader from "../../components/Loader";
import ItemCard from "../../components/ItemCard";

const GroupItems = () => {
  return (
    <GroupContextProvider>
      <Group />
    </GroupContextProvider>
  );
};

const Group = () => {
  const router = useRouter();
  const id = router.query.group;
  const { productGroups } = React.useContext(GroupContext);
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    const product = productGroups?.find((product) => product.id === Number(id));
    product == null ? "" : setState(product);
  }, [id, productGroups]);

  return (
    <div>
      <div className="flex items-center bg-white border-b shadow-md sticky top-0 left-0 px-4 py-2">
        <button
          onClick={() => router.back()}
          className=" text-gray-600 hover:bg-gray-400 rounded-md sticky top-0 left-0 p-2"
        >
          <ArrowLeft />
        </button>
        <h1 className=" text-lg ml-4">{router.query.title}</h1>
      </div>
      <div className=" container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {state === null ? (
          <Loader text="Loading ... " />
        ) : (
          state.products.map((product) => {
            return <ItemCard key={product.id} itemData={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default GroupItems;

import React from "react";
import { useParams } from "react-router-dom";
import ItemPage from "../components/page/itemPage";
import ItemsListPage from "../components/page/itemListPage";
const Items = () => {
  const params = useParams();
  const { itemId } = params;

  return (
    <>
        { itemId
          ? <ItemPage itemId={itemId} />
          : <ItemsListPage/>
        }
    </>
  );
};

export default Items;

import axios from "axios";
import { useEffect, useState } from "react";
const Shop = () => {
  const [shopState, setShopState] = useState([]);
  useEffect(() => {
    axios.get("shop").then((response) => {
      const { data } = response;
      console.log(data);
      setShopState(data);
    });
  }, []);

  // const categories= ["mens","womens","jakets","snikers","hats"]

  const filteredData = (category) => {
    shopState.filter((shopItem) => shopItem.category === category);
  };
  filteredData();

  return (
    <div className="container">
      {shopState.map((shopItem) =>  filteredData.map((shopItem) => {return <div>{shopItem.name}</div>;})
      )}
    </div>
  );
};

export default Shop;

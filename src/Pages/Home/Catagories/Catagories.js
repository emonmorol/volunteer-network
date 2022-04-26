import React, { useEffect, useState } from "react";
import CatagoryCard from "../CatagoryCard/CatagoryCard";

const Catagories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map((category) => (
        // <p>{category.title}</p>
        <CatagoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Catagories;

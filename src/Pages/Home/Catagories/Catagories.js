import React from "react";
import useCategories from "../../../Hooks/useCategories";
import CatagoryCard from "../CatagoryCard/CatagoryCard";

const Catagories = () => {
  const [categories] = useCategories();
  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map((category) => (
        // <p>{category.title}</p>
        <CatagoryCard key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Catagories;

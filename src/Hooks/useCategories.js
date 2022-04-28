import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://volunteer-zone-patrified.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return [categories, setCategories];
};

export default useCategories;

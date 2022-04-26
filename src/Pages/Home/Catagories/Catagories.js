import React, { useEffect, useState } from "react";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return <div>Catagories{catagories.length}</div>;
};

export default Catagories;

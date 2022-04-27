import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utililty/firebase/firebase.utility.js";

// import SHOP_DATA from "../shop-data.js";
// as the actual value you want to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoryMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // Update the database on firebase
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

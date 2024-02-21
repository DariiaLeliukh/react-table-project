import { useState, useMemo } from "react";

const useSortableData = (products, config = {}) => {
  const [sortConfig, setSortConfig] = useState(config);
  const [searchField, setSearchField] = useState("");

  const filteredSortedItems = useMemo(() => {
    if (searchField.length > 0) {
      let sortedData = [];
      products.forEach((record) => {
        console.log("searchField", searchField);

        console.log("record", record.name.toLowerCase());

        if (record.name.toLowerCase().includes(searchField.toLowerCase())) {
          sortedData.push(record);
        }
      });

      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });

      return sortedData;
    }
    if (sortConfig !== null) {
      let sortedData = [...products];

      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      return sortedData;
    } else {
      return products;
    }
  }, [products, sortConfig, searchField]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return {
    records: filteredSortedItems,
    requestSort,
    sortConfig,
    searchField,
    setSearchField,
  };
};

export default useSortableData;

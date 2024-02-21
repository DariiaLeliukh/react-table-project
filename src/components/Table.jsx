import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import "../styles/Table.scss";

const Table = (props) => {
  const [sortConfig, setSortConfig] = useState({});
  const [dataArray, setDataArray] = useState(props.data);
  const [displayRows, setDisplayRows] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    loadDataForDisplay();
  }, [dataArray]);

  useEffect(() => {
    sortData();
  }, [sortConfig]);

  useEffect(() => {
    filterData();
  }, [searchField]);

  const loadDataForDisplay = () => {
    const tempArray = [];

    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(
        <TableRow key={dataArray[i].id} dataInfo={dataArray[i]} />
      );
    }

    setDisplayRows(tempArray);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortData = () => {
    let sortedData = [...dataArray];

    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setDataArray(sortedData);
  };

  const filterData = () => {
    if (searchField.length > 0) {
      let sortedData = [];
      props.data.forEach((record) => {
        console.log("searchField", searchField);

        console.log("record", record.name.toLowerCase());

        if (record.name.toLowerCase().includes(searchField.toLowerCase())) {
          sortedData.push(record);
        }
      });

      setDataArray(sortedData);
    } else {
      setDataArray(props.data);
    }
  };

  return (
    <>
      <input
        name="myInput"
        defaultValue={searchField}
        placeholder="Search by Name"
        onChange={(e) => {
          setSearchField(e.target.value);
          setSortConfig({});
        }}
      />
      <table>
        <thead>
          <TableHeader
            columns={props.columns}
            sortBy={props.sortBy}
            sortConfig={sortConfig}
            requestSort={requestSort}
          />
        </thead>
        <tbody>{displayRows}</tbody>
      </table>
    </>
  );
};

export default Table;

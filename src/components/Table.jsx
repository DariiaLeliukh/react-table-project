import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = (props) => {
  const [sortedField, setSortedField] = useState(null);
  const [dataArray, setDataArray] = useState(props.data);
  const [displayRows, setDisplayRows] = useState([]);

  useEffect(() => {
    loadDataForDisplay();
  }, [dataArray]);

  useEffect(() => {
    sortData();
  }, [sortedField]);

  const loadDataForDisplay = () => {
    const tempArray = [];

    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(
        <TableRow key={dataArray[i].id} dataInfo={dataArray[i]} />
      );
    }

    setDisplayRows(tempArray);
  };

  const sortData = () => {
    let sortedData = [...dataArray];

    console.log(sortedField);

    if (sortedField !== null) {
      console.log("inside if sortedField");

      sortedData.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }
    console.log(sortedData);

    setDataArray(sortedData);
  };

  return (
    <>
      <table>
        <thead>
          <TableHeader
            columns={props.columns}
            sortBy={props.sortBy}
            setSortedField={setSortedField}
          />
        </thead>
        <tbody>{displayRows}</tbody>
      </table>
    </>
  );
};

export default Table;

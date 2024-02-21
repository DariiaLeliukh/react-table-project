import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import "../styles/Table.scss";
import useSortableData from "../hooks/sorting";

const Table = (props) => {
  const { records, requestSort, sortConfig, searchField, setSearchField } =
    useSortableData(props.data);

  return (
    <>
      <label htmlFor="searchInput">Search By Name</label>
      <input
        name="searchInput"
        defaultValue={searchField}
        placeholder="Search by Name"
        onChange={(e) => {
          setSearchField(e.target.value);
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
        <tbody>
          {records.map((record) => {
            return (
              <TableRow
                key={record.id}
                dataInfo={record}
                columns={props.columns}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

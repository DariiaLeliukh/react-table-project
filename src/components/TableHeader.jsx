function TableHeader(props) {
  const columnHeaders = [];
  for (let i = 0; i < props.columns.length; i++) {
    if (props.sortBy.includes(props.columns[i])) {
      columnHeaders.push(
        <th key={i}>
          <button
            type="button"
            onClick={() => {
              props.requestSort(props.columns[i]);
            }}
            className={
              props.sortConfig.key === props.columns[i]
                ? props.sortConfig.direction
                : ""
            }
          >
            {props.columns[i]}
          </button>
        </th>
      );
    } else {
      columnHeaders.push(<th key={i}>{props.columns[i]}</th>);
    }
  }

  return (
    <>
      <tr>{columnHeaders}</tr>
    </>
  );
}

export default TableHeader;

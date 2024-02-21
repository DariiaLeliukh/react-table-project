function TableRow(props) {
  const { id, name, quantity, category, price, description } = props.dataInfo;

  return (
    <tr>
      <td data-label={props.columns[0]}>{id}</td>
      <td data-label={props.columns[1]}>{name}</td>
      <td data-label={props.columns[2]}>{quantity}</td>
      <td data-label={props.columns[3]}>{category}</td>
      <td data-label={props.columns[4]}>{price}</td>
      <td data-label={props.columns[5]}>{description}</td>
    </tr>
  );
}

export default TableRow;

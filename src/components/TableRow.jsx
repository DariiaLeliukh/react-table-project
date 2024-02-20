function TableRow(props) {
  const { id, name, quantity, category, price, description } = props.dataInfo;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{description}</td>
    </tr>
  );
}

export default TableRow;

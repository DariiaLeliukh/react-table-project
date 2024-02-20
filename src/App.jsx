import "./App.css";
import Table from "./components/Table";

import data from "./mocks/sample_table_data.json";

function App() {
  return (
    <>
      <Table
        data={data}
        columns={["id", "name", "quantity", "category", "price", "description"]}
        sortBy={["name", "quantity", "category", "price"]}
      />
    </>
  );
}

export default App;

import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const App = () => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    const newDataWithId = { ...newData, id: Date.now() };
    setData([...data, newDataWithId]);
  };

  const editData = (editedData) => {
    const updatedData = data.map((item) => {
      if (item.id === editedData.id) {
        return editedData;
      }
      return item;
    });
    setData(updatedData);
  };

  const deleteData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>Simple Application</h1>
      <Form addData={addData} />
      <Table data={data} editData={editData} deleteData={deleteData} />
    </div>
  );
};

export default App;

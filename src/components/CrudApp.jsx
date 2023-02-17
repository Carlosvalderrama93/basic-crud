import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { initialDb } from "./falseDatabase/db";

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);  
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = db.length + 1;
    setDb([...db, data]);
  };

  const updateData = (data) => {
    console.log("Intentando actualizar datos")
    const newDb = db.map(el => el.id === data.id ? data : el);
    setDb(newDb);
    
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Are you sure to delete the element with ID '${id}'`);
    if(isDelete){
      let newData = db.filter(el => (el.id !== id))
      setDb(newData);

    }else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD app</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};
import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {name, lastName, id} = el;
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.lastName}</td>
      <td>
        <button onClick={()=>{setDataToEdit(el)}}>Editar</button>
        <button onClick={()=>{deleteData(id)}}>Eliminar</button>
      </td>
    </tr>
  );
};

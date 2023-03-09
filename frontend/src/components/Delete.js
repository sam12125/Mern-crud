import React from "react";
import { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");

   

  const deleteData = async() => {
    console.log(id)
    await fetch(`https://crud10.onrender.com/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch(error => {
      window.alert(error);
      return;
    })
    window.location.reload()
  }

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <input placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
        <button onClick={deleteData}>Delete</button>
      </div>
    </>
  );
}

export default Delete;

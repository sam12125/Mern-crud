import React from "react";
import { useState } from "react";
import axios from "axios";

function Update() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [id, setId] = useState("");

  const updateData = async () => {
    const user = {
      name: name,
      marks: marks,
    };
    console.log(user);

    await fetch(`https://crud10.onrender.com/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
        <input
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter marks"
          type="number"
          onChange={(e) => setMarks(e.target.value)}
        />
        <input placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
        <button onClick={updateData}>Update</button>
      </div>
    </>
  );
}

export default Update;

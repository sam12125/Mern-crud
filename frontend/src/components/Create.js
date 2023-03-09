import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const postData = async() => {
    // console.log(name,marks)
    const user = {
      name: name,
      marks: marks,
    };
    console.log(user);
    // try{
    //   const res = await axios.post('/read',
    //   JSON.stringify(user),{
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
    //   })
    // }catch(err){
    //   console.log(err.response.data)
    // }

    await fetch("https://crud10.onrender.com/insert",{
      method: "POST",
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
      <div>
        <input
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter marks"
          type="number"
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={postData}>Post</button>
      </div>
    </>
  );
}

export default Create;

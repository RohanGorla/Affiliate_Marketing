import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [company, setCompany] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  async function addProduct() {
    let response = await axios.post("http://localhost:8008/addProduct", {
      fileType: file.type,
      name: name,
      cat: cat,
      company: company,
      mrp: mrp,
      price: price,
      url: url,
    });
    console.log(response.data);
    setFile();
    setName("");
    setCat("");
    setCompany("");
    setMrp("");
    setPrice("");
    setUrl("");
    let res2 = await axios.put(response.data, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  }

  return (
    <div className="Merchant_Container">
      <div className="Photo_Input">
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
      </div>
      <div className="Name">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter product name"
        ></input>
      </div>
      <div className="Category">
        <input
          type="text"
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);
          }}
          placeholder="Enter category"
        ></input>
      </div>
      <div className="Company">
        <input
          type="text"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          placeholder="Enter company name"
        ></input>
      </div>
      <div className="MRP">
        <input
          type="text"
          value={mrp}
          onChange={(e) => {
            setMrp(e.target.value);
          }}
          placeholder="Enter mrp"
        ></input>
      </div>
      <div className="Price">
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter final price"
        ></input>
      </div>
      <div className="URL">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="Enter product url"
        ></input>
      </div>
      <div>
        <button onClick={addProduct}>Add</button>
      </div>
    </div>
  );
}

export default App;

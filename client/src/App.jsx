import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [pcwm, setPcwm] = useState(false);
  const [pfwm, setPfwm] = useState(false);
  const [category, setCategory] = useState("");
  const [lowerPrice, setLowerPrice] = useState("");
  const [upperPrice, setUpperPrice] = useState("");
  const [company, setCompany] = useState([]);

  async function getProductData() {
    let response = await axios.get("http://localhost:8008/");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="Home_Page_Container">
      <div className="Home_Page_Main">
        <div className="App_Title">
          <h1 className="App_Title--Text">Affiliate marketing!</h1>
        </div>
        <div className="Product_Display">
          {data?.map((data) => {
            return (
              <div className="Product_Container" key={data.id}>
                <div className="Product_Image">
                  <img
                    src={data.image_url}
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
                    onClick={() => {
                      window.open(`${data.product_url}`);
                    }}
                  ></img>
                </div>
                <div className="Product_Details">
                  <p className="Product_Name">{data.product_name}</p>
                  <p className="Product_Category">{data.product_category}</p>
                  <p className="Product_Company">{data.company_name}</p>
                  <p className="Product_Price">₹{data.offer_price}</p>
                  <p className="Product_MRP">
                    M.R.P:{" "}
                    <span className="Product_MRP--Strike">
                      ₹{data.product_mrp}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={pcwm ? "Product_Category_Window--Mobile" : "Display_None"}
        ></div>
        <div
          className={pfwm ? "Product_Filter_Window--Mobile" : "Display_None"}
        ></div>
        <div className="Product_Filter_Tab--Mobile">
          <div
            className="Product_Filter--Category"
            onClick={() => {
              setPcwm(!pcwm);
              setPfwm(false);
            }}
          >
            <p>Category</p>
          </div>
          <div
            className="Product_Filter--Filter"
            onClick={() => {
              setPfwm(!pfwm);
              setPcwm(false);
            }}
          >
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

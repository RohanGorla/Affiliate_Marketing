import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

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
              <div className="Product_Container">
                <div className="Product_Image">
                  <img
                    style={{ maxWidth: "100%" }}
                    src={data.image_url}
                    onClick={() => {
                      window.open(`${data.product_url}`);
                    }}
                  ></img>
                </div>
                <div className="Product_Details">
                  <p className="Product_Name">{data.product_name}</p>
                  <p className="Product_Category">{data.product_category}</p>
                  <p className="Product_Company">{data.company_name}</p>
                  <p className="Product_Price">{data.offer_price}</p>
                  <p className="Product_MRP">
                    M.R.P:{" "}
                    <span className="Product_MRP--Strike">
                      {data.product_mrp}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Product_Filter--Mobile">
          <div className="Product_Category">
            <p></p>
          </div>
          <div className="Product_Company"></div>
          <div className="Product_Price"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

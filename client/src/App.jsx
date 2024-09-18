import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [pcwm, setPcwm] = useState(false);
  const [pfwm, setPfwm] = useState(false);
  const [category, setCategory] = useState("");
  const [lowerPrice, setLowerPrice] = useState("");
  const [upperPrice, setUpperPrice] = useState("");
  const [company, setCompany] = useState("");
  const [disabled, setDisabled] = useState(true);

  async function getProductData() {
    let response = await axios.get("http://localhost:8008/");
    console.log(response.data);
    setData(response.data);
    setActualData(response.data);
  }

  function selectCategory() {
    let newData = actualData.filter((product) => {
      if (product.product_category === category) {
        return product;
      }
    });
    setData(newData);
  }

  function selectFilter() {
    if (category) {
      if (company) {
        let newData = actualData.filter((product) => {
          if (Number(lowerPrice) != 40000) {
            if (
              product.product_category === category &&
              product.company_name === company &&
              product.offer_price >= Number(lowerPrice) &&
              product.offer_price <= Number(upperPrice)
            ) {
              return product;
            }
          } else {
            if (
              product.product_category === category &&
              product.company_name === company &&
              product.offer_price >= Number(lowerPrice)
            ) {
              return product;
            }
          }
        });
        setData(newData);
      } else {
        let newData = actualData.filter((product) => {
          if (Number(lowerPrice) != 40000) {
            if (
              product.product_category === category &&
              product.offer_price >= Number(lowerPrice) &&
              product.offer_price <= Number(upperPrice)
            ) {
              return product;
            }
          } else {
            if (
              product.product_category === category &&
              product.offer_price >= Number(lowerPrice)
            ) {
              return product;
            }
          }
        });
        setData(newData);
      }
    } else {
      if (company) {
        let newData = actualData.filter((product) => {
          if (Number(lowerPrice) != 40000) {
            if (
              product.company_name === company &&
              product.offer_price >= Number(lowerPrice) &&
              product.offer_price <= Number(upperPrice)
            ) {
              return product;
            }
          } else {
            if (
              product.company_name === company &&
              Number(product.offer_price) >= Number(lowerPrice)
            ) {
              return product;
            }
          }
        });
        setData(newData);
      } else {
        let newData = actualData.filter((product) => {
          if (Number(lowerPrice) != 40000) {
            if (
              product.offer_price >= Number(lowerPrice) &&
              product.offer_price <= Number(upperPrice)
            ) {
              return product;
            }
          } else {
            if (product.offer_price >= Number(lowerPrice)) {
              return product;
            }
          }
        });
        setData(newData);
      }
    }
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
                    // src={data.image_url}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
                    onClick={() => {
                      window.open(`${data.product_url}`);
                    }}
                  ></img>
                </div>
                <div className="Product_Details">
                  <p className="Product_Name">{data.product_name}</p>
                  <p className="Product_Category">
                    {data.product_category} - {data.company_name}
                  </p>
                  {/* <p className="Product_Company">{data.company_name}</p> */}
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
        >
          {/* <p className="Select_Category_Heading">Select category</p> */}
          <p className="Select_Category_Note">
            Select your requires category from the drop down below.
          </p>
          <div className="Select_Category--Select">
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                setDisabled(false);
              }}
            >
              <option defaultValue={true} hidden>
                Select category
              </option>
              <option value="Smartphone">Smartphone</option>
              <option value="Laptop">Laptops & Tabs</option>
              <option value="Television">Televisions</option>
              <option value="Kitchen">Kitchen appliances</option>
            </select>
          </div>
          <div
            className={
              disabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                setPcwm(false);
                selectCategory();
                setDisabled(true);
              }}
              disabled={disabled}
            >
              Show products
            </button>
          </div>
        </div>
        <div
          className={pfwm ? "Product_Filter_Window--Mobile" : "Display_None"}
        >
          <p>Select company from below drop down!</p>
          <div className="Select_Company">
            <select
              onChange={(e) => {
                setCompany(e.target.value);
                setDisabled(false);
              }}
            >
              <option defaultValue={true} hidden>
                Select company
              </option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Oneplus">Oneplus</option>
              <option value="Vivo">Vivo</option>
              <option value="Realme">Realme</option>
              <option value="LG">LG</option>
              <option value="IQOO">IQOO</option>
              <option value="Godrej">Godrej</option>
              <option value="Daikin">Daikin</option>
              <option value="ASUS">ASUS</option>
              <option value="Apple">Apple</option>
              <option value="Nokia">Nokia</option>
            </select>
          </div>
          <p>Select your price range from below drop down!</p>
          <div className="Select_Price">
            <select
              onChange={(e) => {
                let lowerLimit = e.target.value.split("-")[0];
                let upperLimit = e.target.value.split("-")[1];
                setLowerPrice(lowerLimit);
                setDisabled(false);
                if (upperLimit == 0) {
                  setUpperPrice(0);
                } else {
                  setUpperPrice(upperLimit);
                }
              }}
            >
              <option defaultValue={true} hidden>
                Select price range
              </option>
              <option value="0-10000">0 - 10,000</option>
              <option value="10000-25000">10,001 - 25,000</option>
              <option value="25000-40000">25,001 - 40,000</option>
              <option value="40000-0">more than 40,000 </option>
            </select>
          </div>
          <div
            className={
              disabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                selectFilter();
                setPfwm(false);
              }}
              disabled={disabled}
            >
              Show products
            </button>
          </div>
        </div>
        <div className="Product_Filter_Tab--Mobile">
          <div className="Product_Filter--Category">
            <p
              onClick={() => {
                setPcwm(!pcwm);
                setPfwm(false);
              }}
            >
              Category
            </p>
          </div>
          <div className="Product_Filter--Filter">
            <p
              onClick={() => {
                setPfwm(!pfwm);
                setPcwm(false);
              }}
            >
              Filter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

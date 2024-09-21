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
  const [catDisabled, setCatDisabled] = useState(true);
  const [comDisabled, setComDisabled] = useState(true);

  async function getProductData() {
    let response = await axios.get("http://localhost:8008/");
    console.log(response.data);
    setData(response.data);
    setActualData(response.data);
  }

  // function selectCategory() {
  //   let newData = actualData.filter((product) => {
  //     if (product.product_category === category) {
  //       return product;
  //     }
  //   });
  //   setData(newData);
  // }

  function selectFilter() {
    if (category) {
      if (company) {
        if (lowerPrice) {
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
            if (
              product.product_category === category &&
              product.company_name === company
            ) {
              return product;
            }
          });
          setData(newData);
        }
      } else {
        let newData = actualData.filter((product) => {
          if (lowerPrice) {
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
          } else {
            if (product.product_category === category) {
              return product;
            }
          }
        });
        setData(newData);
      }
    } else {
      if (company) {
        let newData = actualData.filter((product) => {
          if (lowerPrice) {
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
          } else {
            if (product.company_name === company) {
              return product;
            }
          }
        });
        setData(newData);
      } else {
        let newData = actualData.filter((product) => {
          if (lowerPrice) {
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
      <div className="App_Title">
        <h1 className="App_Title--Text">Affiliate marketing!</h1>
      </div>
      <div className="Home_Page_Main">
        {/* FOR LARGE SCREENS */}
        <div className="Product_Category_Select_Tab--Large">
          <div className="Product_Category_Select--Large--Select">
            <select
              onChange={(e) => {
                setCategory(e.target.value);
                setCatDisabled(false);
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
          <div className="Product_Price_Select--Large--Select">
            <select
              onChange={(e) => {
                let lowerLimit = e.target.value.split("-")[0];
                let upperLimit = e.target.value.split("-")[1];
                setLowerPrice(lowerLimit);
                setComDisabled(false);
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
          <div className="Product_Company_Select--Large--Select">
            <select
              onChange={(e) => {
                setCompany(e.target.value);
                setComDisabled(false);
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
          <div
            className={
              comDisabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                selectFilter();
                setPfwm(false);
                // setComDisabled(true);
              }}
              disabled={comDisabled}
            >
              Show products
            </button>
          </div>
          {/* <div
            className={
              catDisabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                setPcwm(false);
                // selectCategory();
                selectFilter();
                // setCatDisabled(true);
              }}
              disabled={catDisabled}
            >
              Show products
            </button>
          </div> */}
        </div>
        <div className="Product_Display">
          {data?.map((data) => {
            let mrp = data.product_mrp;
            let offer_price = data.offer_price;
            let mrp_string = mrp.toString();
            let offer_price_string = offer_price.toString();
            let mrp_arrey = mrp_string.split("").reverse();
            let offer_price_arrey = offer_price_string.split("").reverse();
            let mrp_iterator = Math.floor(mrp_arrey.length / 2);
            let offer_price_iterator = Math.floor(offer_price_arrey.length / 2);
            let k = 3;
            for (let j = 0; j < mrp_iterator - 1; j++) {
              console.log("in");
              console.log(k);
              mrp_arrey.splice(k, 0, ",");
              k += 3;
            }
            k = 3;
            for (let j = 0; j < offer_price_iterator - 1; j++) {
              console.log("in");
              console.log(k);
              offer_price_arrey.splice(k, 0, ",");
              k += 3;
            }
            let mrp_actual = mrp_arrey.reverse().join("");
            let offer_price_actual = offer_price_arrey.reverse().join("");
            return (
              <div className="Product_Container" key={data.id}>
                <div className="Product_Image">
                  <img
                    src={data.image_url}
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijfZSJc2Ck-FSNYjwvLvn9m3LWP0_cOHfGA&s"
                  ></img>
                </div>
                <div className="Product_Details">
                  <p className="Product_Name">{data.product_name}</p>
                  <p className="Product_Category">
                    {data.product_category} - {data.company_name}
                  </p>
                  {/* <p className="Product_Company">{data.company_name}</p> */}
                  <p className="Product_Price">
                    <span className="Discount_Percentage">
                      -{data.product_discount}%
                    </span>{" "}
                    ₹{offer_price_actual}
                  </p>
                  <p className="Product_MRP">
                    M.R.P:{" "}
                    <span className="Product_MRP--Strike">₹{mrp_actual}</span>
                  </p>
                  <button
                    className="View_Product--Button"
                    onClick={() => {
                      window.open(`${data.product_url}`);
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="Product_Filter_Select_Tab--Large">
          <div className="Product_Price_Select--Large--Select">
            <select
              onChange={(e) => {
                let lowerLimit = e.target.value.split("-")[0];
                let upperLimit = e.target.value.split("-")[1];
                setLowerPrice(lowerLimit);
                setComDisabled(false);
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
          <div className="Product_Company_Select--Large--Select">
            <select
              onChange={(e) => {
                setCompany(e.target.value);
                setComDisabled(false);
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
          <div
            className={
              comDisabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                selectFilter();
                setPfwm(false);
                // setComDisabled(true);
              }}
              disabled={comDisabled}
            >
              Show products
            </button>
          </div>
        </div> */}
        {/* FOR MOBILE DEVICES */}
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
                setCatDisabled(false);
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
              catDisabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                setPcwm(false);
                selectFilter();
                setCatDisabled(true);
              }}
              disabled={catDisabled}
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
                setComDisabled(false);
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
                setComDisabled(false);
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
              comDisabled
                ? "Select_Category_Button"
                : "Select_Category_Button Select_Category_Button--Active"
            }
          >
            <button
              onClick={() => {
                selectFilter();
                setPfwm(false);
                setComDisabled(true);
              }}
              disabled={comDisabled}
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

import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="Home_Page_Container">
      <div className="Home_Page_Main">
        <div className="App_Title">
          <h1>This is an amazon affiliate marketing website!</h1>
        </div>
        <div className="Product_Display">
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
          <div className="Product_Container">
            <div className="Product_Image">
              <img
                style={{ maxWidth: "100%" }}
                src="https://www.cnet.com/a/img/resize/690ad0a97cf8fc98f3cf851e7b149d2ffc5b171e/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&height=500"
                onClick={() => {
                  window.open(
                    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3Mzk4Nzk3MzgxNDA5NDMzOjE3MjY1MTMxOTc6c3BfYXRmOjMwMDEyMjM3OTg1ODIzMjo6MDo6&url=%2FSamsung-Galaxy-Smartphone-Titanium-Storage%2Fdp%2FB0CS6M53JV%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1KE1M817S34HO%26dib%3DeyJ2IjoiMSJ9.Mp0SYrWBi6e_Pmtcj8Y4b9OFammlmeUmMPMFlbveRQxQBiYZ9tlLQsLN_xdNtuo82Bz_IKxXh9FYVmcqieuz-Or2C_edv8CAyM-ql-wdy2NoyxoKJ2w9ajA1fNC9aSEPdnOyRqV3GmkdTjgeJcB7IhM_lutCFm54l2-x5z43QVFOyUCRyZtGUGgnBDXJtFwq9HehyK6yvUmHgAEOrcIgQHbKi7yJnmvc7EijPBARsEY.jMs7nwDSoeTp7jFC4n7pCRm1rcKJ-dPzHDzi6M6v2tk%26dib_tag%3Dse%26keywords%3Dsamsung%2Bs24%2Bultra%26qid%3D1726513197%26sprefix%3Dsamsung%2Bs24%2Bultr%252Caps%252C248%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
                  );
                }}
              ></img>
            </div>
            <div className="Product_Details">
              <p className="Product_Name">Samsung S25 PRO</p>
              <p className="Product_Price">₹62,500</p>
              <p className="Product_MRP">
                M.R.P: <span className="Product_MRP--Strike">₹75,000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

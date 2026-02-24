import React from "react";
import "./Footer.scss";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cibInstagram } from "@coreui/icons";
const Footer = () => {
  const items = [
    {
      id: 1,
      title: "Գլխավոր էջ",
    },
    {
      id: 2,
      title: "Նամակներ",
    },
    {
      id: 3,
      title: "Մեր մասին",
    },
    {
      id: 4,
      title: "Հետադարձ կապ",
    },
  ];
  return (
    <div className="Footer">
      <div className="container">
        <div className="topBlock">
          <div className="ImageLogo">
            <img src="/images/logo.png" alt="WebSiteLogo" />
          </div>
          <div className="pages">
            {items?.map((el,index) => {
              return (
                <div key={el?.id+index} className="items">
                  <a href={"#" + el?.title}> {el?.title} </a>
                </div>
              );
            })}
          </div>
          <div className="social">
            <div className="socialLogo">
            
              {/* <a href=""><img src="/images/facebook.png" alt="facebook" /></a> */}
              <a href="https://www.facebook.com/ShoonchYogaStudio?mibextid=LQQJ4d" target="_balnk"><CIcon icon={cibFacebook} size="xl"/></a>
              <a href="https://instagram.com/shoonchyogastudio?igshid=YTQwZjQ0NmI0OA==" target="_balnk"><CIcon icon={cibInstagram} size="xl"/></a>

              {/* <img src="/images/telegram.png" alt="telegram" /> */}
            </div>
            <p className="tel">
              Հեռ․ <a href="tel:+37498539964">098/010 53 99 64</a>
            </p>
            <p className="mail">
              Էլ․ հասցե <a href="info@shoonch.com">info@shoonch.com</a>
            </p>
          </div>
        </div>
        
      </div>
      <div className="lineHr" ></div>

        <div className="companyLogo" >
          <img className="logo1" src="/images/companyLogo.png" alt="companyLogo" />
          <img className="logo2" src="/images/myLogo.png" alt="companyLogo" />
        </div>
    </div>
  );
};

export default Footer;

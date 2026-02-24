import React from "react";
import "./AboutComponent.scss";
const AboutComponent = () => {
  return (
    <div className="AboutComponent" id="Մեր մասին" >
      <div className="container">
        <div className="rightText">
          <div className="titLogo">
            <div className="aboutLogo">
              <img src="/images/ShunchLogo.png" alt="AboutImage" />
            </div>
            <p className="title">Մեր մասին</p>
          </div>
          <p className="text1">
            Շունչ յոգայի և պիլատեսի կենտրոնը հիմնադրվել է 2007 թվականին և սկսել իր աշխատանքն ԱՄՆ-ում և Հնդկաստանում մասնագիտական կրթություն ստացած ուսուցիչների հետ միասին։ Բացման օրից, կենտրոնը շարունակում է ապահովել դասերի բարձր որակ՝ խրախուսելով ուսուցիչների արտերկիր տարեկան վերապատրաստման և ավագ ուսուցիչների կենտրոն հրավիրելու գործընթացը:

            16 տարիների ընթացքում ձևավորվել է հավատարիմ հաճախորդների մեծ համայնք, որի շնորհիվ կենտրոնն իրականացնում է տարբեր բարեգերծական ծրագրեր, ինչպիսինն է «Եղիր Հրեշտակը»։
            <br /> <i> թվացող երազանքները։</i>
          </p>
          <p className="text2">
   Հարցերի դեպքում զանգահարել ՝
            098/010 539964 <br/>  Սիրով՝ Շունչ
          </p>   
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

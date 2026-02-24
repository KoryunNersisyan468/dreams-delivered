import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./Header.scss";

const Header = ({ setModal }) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const items = [
    {
      id: 1,
      title: "Գլխավոր էջ"
    },
    {
      id: 2,
      title: "Նամակներ"
    },
    {
      id: 3,
      title: "Մեր մասին"
    },
    {
      id: 4,
      title: "Հետադարձ կապ"
    },
  ];

  return (
    <div className='Header'>
      <div className='container'>
        <div className='Logo'>
          <img src="/images/logo.png" alt='WebSiteLogo' onClick={() => navigate("/")} />
        </div>

        <div className='pages'>
          {items?.map((el,index) => (
            <div key={el?.id+index} className='items'>
              <a href={"#" + el?.title}> {el?.title} </a>
            </div>
          ))}
        </div>

        <div className='btn'>
          <button onClick={() => setModal(true)}>Եղիր Հրեշտակ</button>
        </div>

        <div className='hamburger-menu' onClick={() => setModalOpen(!isModalOpen)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        {isModalOpen && (
          <div className='modal' onClick={()=>setModalOpen(false)} >
            <div className="pages">
              {items?.map((el,index) => (
                <div key={el?.id+index} className='items'>
                  <a href={"#" + el?.title}> {el?.title} </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

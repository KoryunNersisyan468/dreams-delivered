import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFoundPage.scss'

const NotFoundPage = () => {
  const navigate=useNavigate()

      return (
          <>
              <div className="cont-404">
                  <img src="/images/404.svg" alt="svg" />
              <button onClick={()=>navigate('/')} >Back to Home</button>

              </div>
          </>
      );
  };


export default NotFoundPage

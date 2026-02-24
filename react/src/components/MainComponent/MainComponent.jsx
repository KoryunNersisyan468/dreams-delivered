import React, { useState, useRef } from "react";
import "./MainComponent.scss";
import Letters from "../LettersComponent/Letters";

const MainComponent = ({ setModal }) => {
  const ImageHelp = [
    {
      id: 1,
      src: "/images/ImageHelp1.png",
      text: "Բացեք նվերի տուփը",
    },
    {
      id: 2,
      src: "/images/ImageHelp2.png",
      text: "Կարդացեք երեխայի նամակն ուղղված Ձմեռ Պապիկին",
    },
    {
      id: 3,
      src: "/images/ImageHelp3.png",
      text: "Բերեք նվերը Շունչ կենտրոն մինչև Դեկտեմբերի 25-ը",
    },
  ];

  const [idx, setIdx] = useState(0);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;

      if (deltaX > 0) {
        // Swipe right
        setIdx((prevIdx) => (prevIdx - 1 + ImageHelp.length) % ImageHelp.length);
      } else if (deltaX < 0) {
        // Swipe left
        setIdx((prevIdx) => (prevIdx + 1) % ImageHelp.length);
      }

      touchStartX.current = null;
    }
  };

  const handlePointClick = (newIdx) => {
    if (newIdx >= 0 && newIdx < ImageHelp.length) {
      setIdx(newIdx);
    }
  };





  return (
    <div className="MainComponent">
      <div className="container">
        <p className="title">Ինչպե՞ս մասնակցել</p>

        <div className="imageHelp">
          {ImageHelp?.map((el, index) => {
            return (
              <div key={index + 1}  >
                <div className="imageContainer"  >
                  <img key={el?.id} src={el?.src} alt="Steps" />
                  <p className="text">{el?.text}</p>
                </div>

                <div className="OneImageContainer" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} >
                  {index === idx && <div className="hiddenConta" >
                    <img  src={el?.src} alt="Steps" />
                    <p className="text">{el?.text}</p>
                  </div>}
                </div>
              </div>
            );
          })}
          <div className="pointsContainer" >
          {ImageHelp.map((_, index) => (
              <div key={index+1} className={`point ${index === idx ? "active" : ""}`} onClick={() => handlePointClick(index)}></div>
            ))}
          </div>
        </div>
        <Letters setModal={setModal} />
      </div>
    </div>
  );
};

export default MainComponent;

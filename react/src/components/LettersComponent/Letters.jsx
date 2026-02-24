import React, { useState, useRef } from 'react';
import './Letters.scss';
import LetterTopGift from '../LetterTopGiftComponent/LetterTopGift';
import LetterComponentTwo from '../LetterComponentTwo/LetterComponentTwo';

const Letters = ({ setModal }) => {
  const BalloonsImage = [
    {
      id: 1,
      src: "/images/ballon1.png",
    },
    {
      id: 2,
      src: "/images/ballon2.png",
    },
    {
      id: 3,
      src: "/images/ballon3.png",
    },
    {
      id: 4,
      src: "/images/ballon4.png",
    },
    {
      id: 5,
      src: "/images/ballon5.png",
    },
    {
      id: 6,
      src: "/images/ballon6.png",
    },
    {
      id: 7,
      src: "/images/ballon7.png",
    },
    {
      id: 8,
      src: "/images/ballon8.png",
    },
    {
      id: 9,
      src: "/images/ballon9.png",
    },
    {
      id: 10,
      src: "/images/ballon10.png",
    },
    {
      id: 11,
      src: "/images/ballon1.png",
    },
    {
      id: 12,
      src: "/images/ballon2.png",
    },
    {
      id: 13,
      src: "/images/ballon3.png",
    },
    {
      id: 14,
      src: "/images/ballon4.png",
    },
    {
      id: 15,
      src: "/images/ballon5.png",
    },
  ];

  const [defaultHeights, setDefaultHeights] = useState(
    Array.from({ length: BalloonsImage.length }, () => null)
  );
  const [defaultWidth, setDefaultWidth] = useState(
    Array.from({ length: BalloonsImage.length }, () => null)
  )
  const yearRef = useRef();

  const handleImageLoad = (index, event) => {
    setDefaultHeights(prevHeights => {
      const newHeights = [...prevHeights];
      newHeights[index] = event.target.height;
      return newHeights;
    });
    setDefaultWidth(defaultWidth => {
      const newHeights = [...defaultWidth];
      newHeights[index] = event.target.width;
      return newHeights;
    });
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() - 1;
  const yearsArray = Array.from({ length: 15 }, (_, i) => currentYear - i);

  const [year, setYear] = useState(0)
  const [showTwoCom, setShowTwoCom] = useState(false)
  function activity(yearVal) {
    setYear(yearVal);
    setShowTwoCom(true)

  }
  return (
    <div className="Letters">
      <LetterTopGift setModal={setModal} />
      <p className="title" >
        Մեր գործունեությունը
      </p>

      <div className="ballons">
        <hr className="line" />
        {!showTwoCom ?
          <>
            <div className="baloonImages">
              {BalloonsImage?.map((el, index) => (
                <div className="imgConta" style={{ width: '140px', padding: "0 10px" }} key={index} onClick={() => activity(index)}  >
                  <img
                    src={el?.src}
                    alt="WishBaloons"
                    onLoad={(event) => handleImageLoad(index, event)}
                  />
                  {(defaultHeights[index] !== null && defaultHeights[index] !== undefined) && (
                    <p
                      style={{
                        bottom: `${defaultHeights[index] * (defaultWidth[index] * 0.4 / 1000)}px`,
                        fontSize: `${defaultWidth[index] * 0.28}px`
                      }}
                      ref={yearRef}
                      className="yearNumber"
                    >
                      {yearsArray[index]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </> :
          <LetterComponentTwo year={year} yearsArray={yearsArray} setShowTwoCom={setShowTwoCom} setYear={setYear} />

        }
      </div>
    </div>
  );
};

export default Letters;

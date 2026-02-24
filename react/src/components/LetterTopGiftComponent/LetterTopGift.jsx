import React from 'react'
import "./LetterTopGift.scss"
const LetterTopGift = ({setModal}) => {
  return (
    <div className='LetterTopGift' id="Նամակներ" >

      <div className='LetterCont ' >
          <div className="textGift">Ընտրեք մի զարդարանք տոնածառից</div>
          <div className="imageGift" onClick={()=>setModal(true)} >
            <img src='/images/tonacar.png' alt='click to open Gift' />
            <img src="./images/xaxaliq.png" alt="" className=' img1' />
          </div>
      </div>
 
    </div>
  )
}

export default LetterTopGift
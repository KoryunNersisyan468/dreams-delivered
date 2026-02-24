import "./HomeHeader.scss"

const HomeHeader = ({setModal}) => {


  return (
    <div className='HomeHeader' 
    style={{background:`url(/images/HomeHeaderBackground.png)`}}
     >
    <div className="container">
      <div className='contaRight' >
      <div className='title' >
        <p>Եղիր Հրեշտակ</p>
      </div>

      <div className="text">
        <p className='text1' >Ծրագիրն ընդգրկել է Հայաստանի Հանրապետության գրեթե բոլոր մարզերը, իսկ մասնակիցների թիվն անցել է շուրջ 5000-ը։ </p>
        <p className='text2' > Այս տարի ծրագրի մասնակիցներն են Արցախից բռնի տեղահանված շուրջ 300 երեխա:</p>
      </div>

      <div className="btn">
        <button onClick={()=>setModal(true)}>Եղիր Հրեշտակ</button>
      </div>
      </div>
      <div>

      

      </div>
      <div className='leftImage' >
        <img src="/images/leftImage.png" alt="left" />
      </div>
      

      </div>
      {/* <div className="centerImage">
        <img src='/images/deer.png' alt='deer' />
      </div> */}
    </div>
  )
}

export default HomeHeader

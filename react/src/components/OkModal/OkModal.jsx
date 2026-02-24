import React from 'react'
import "./OkModal.scss"
const OkModal = ({setSuccsses,setTransitonmodal,setBuyModal,setModal, setBuyModal1}) => {
    function close(){
        setSuccsses(false);
        setTransitonmodal(false);
        setBuyModal(false);
        setModal(false);
        setBuyModal1(false)
    }
    return (
        <div className='OkModal' >

            <div className="modal">
                <div className="container">
                    <div className="conta">
                        <div className="close" onClick={()=>close()}>
                            <img src="/images/WhiteClose.png" alt="Close" />
                        </div>
                        <div className="titleText">
                            <p>Շնորհակալ ենք մեկ օրով հրեշտակ դառնալու համար
                            
                            </p>
                        </div>

                        <div className="imageContainer">
                            <img src='/images/angel.png' alt='angel' />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default OkModal
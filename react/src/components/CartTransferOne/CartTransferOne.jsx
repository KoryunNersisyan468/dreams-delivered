import React, { useEffect, useState } from 'react'
import "./CartTransferOne.scss"



const CartTransferOne = ({ setBuyModal, setModal, setBuyModal1, childID, inputVal, setInputVal }) => {

  useEffect(() => {
    if (inputVal?.child_id !== childID?.id) {
      setInputVal({ ...inputVal, child_id: childID?.id, });
    }
  }, [childID, inputVal, setInputVal])
  const [error, setError] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [errorVal, setErrorVal] = useState([]);
  const [errorMail, setErrorMail] = useState([]);



  function changeValidation(value, name) {
    if (!value || value.trim()?.length === 0) {
      if (!error.includes(name)) {
        setError([...error, name]);
        setErrorMessage(errorMessage.filter((item) => item !== name));
      } else {
        setErrorMessage(errorMessage.filter((item) => item !== name));
      }
    } else if (value.length <= 3 || value.length >= 50) {
      if (!errorMessage.includes(name)) {
        setErrorMessage([...errorMessage, name]);
        setError(error.filter((item) => item !== name));
      } else {
        setError(error.filter((item) => item !== name));
      }
    } else {
      setErrorMessage(errorMessage.filter((item) => item !== name));
      setError(error.filter((item) => item !== name));
    }
  }
  function saveData(e) {
    e.preventDefault();
    if (!inputVal?.name?.length || !inputVal?.surName?.length || !inputVal?.phoneNumber?.length || !inputVal?.mail?.length) {
      const errorArr = []
      Object.keys(inputVal).forEach((el) => {
        if (inputVal[el]?.length === 0) {
          errorArr.push(el)
        }
      })
      setError(errorArr)
    } else {
      if (!error?.length && !errorMessage?.length && !errorVal?.length && !errorMail?.length) {
        setBuyModal1(true)
        setBuyModal(false)

      }

    }

  }

  function changing() {
    setModal(true)
    setBuyModal(false)
  }
  const reg = new RegExp(/^\+374\d{8}$/);
  const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  useEffect(() => {

  }, [inputVal.phoneNumber])
  return (
    <div className='CartTransferOne' >
      <div className="modal">
        <div className="container">
          <div className="conta">
            <div className="topBlock">
              <div className="btnBack" onClick={() => {changing();setInputVal({})}} >
                <img src="/images/LeftVector.png" alt="BackIcon" />
              </div>
              <p className="topTitle">Գնել առանց</p>
              <div className="close" onClick={() => {setBuyModal(false);setInputVal({})}} >
                <img src="/images/CloseIcon.png" alt="CloseIcon" />
              </div>
            </div>

            <div className="formContainer">
              <form autoComplete="off">
                <div className="inputContainer">
                  <div className="inputs">
                    <label className="formTitle">Լրացրեք ձեր տվյալները</label>
                  </div>
                  <div className="inputs">
                    <input
                      className={error?.includes("name") || errorMessage?.includes("name") ? "error" : ""}
                      placeholder="Անուն"
                      value={inputVal?.name}
                      onChange={(e) => {
                        changeValidation(e.target.value, e.target.name);
                        setInputVal({ ...inputVal, name: e.target.value });
                      }}
                      type="text"
                      name="name"
                    />
                    {error.includes("name") && (
                      <span className="errorMessage">Այս դաշտը պարդադիր է</span>
                    )}
                    {errorMessage.includes("name") && (
                      <span className="errorMessage">
                        Մինիմում արժեքը 3 մաքսիմում 50
                      </span>
                    )}
                  </div>
                  <div className="inputs">
                    <input
                      className={error?.includes("surName") || errorMessage?.includes("surName") ? "error" : ""}
                      placeholder="Ազգանուն"
                      type="text"
                      name="surName"
                      value={inputVal?.surName}
                      onChange={(e) => {
                        setInputVal({ ...inputVal, surName: e.target.value });
                        changeValidation(e.target.value, e.target.name);
                      }}
                    />
                    {error.includes("surName") && (
                      <span className="errorMessage">Այս դաշտը պարդադիր է</span>
                    )}
                    {errorMessage.includes("surName") && (
                      <span className="errorMessage">
                        Մինիմում արժեքը 3 մաքսիմում 50
                      </span>
                    )}
                  </div>
                  <div className="inputs">
                    <input
                      className={error?.includes("phoneNumber") || errorMessage?.includes("phoneNumber") ? "error" : ""}
                      type="text"
                      // placeholder="Հեռ․համար"
                      // min={0}
                      // pattern={reg}
                      placeholder={'+374********'}
                      name="phoneNumber"
                      value={inputVal?.phoneNumber}
                      onChange={(e) => {
                        if (!reg.test(e.target.value.trim())) {
                          setErrorVal('Հետևեք ձևանմուշին (+374********)')
                        } else {
                          setErrorVal('')
                        }
                        setInputVal({
                          ...inputVal,
                          phoneNumber: e.target.value,
                        });
                        changeValidation(e.target.value, e.target.name);
                      }}
                    />
                    {error.includes("phoneNumber") && (
                      <span className="errorMessage">Այս դաշտը պարդադիր է</span>
                    )}
                    <br />

                    {errorVal && (
                      <span className="errorMessage">{errorVal}</span>
                    )}


                    {errorMessage.includes("phoneNumber") && (
                      <p className="errorMessage">
                        Մինիմում արժեքը 3 մաքսիմում 50
                      </p>
                    )}
                  </div>
                  <div className="inputs">
                    <input
                      className={error?.includes("mail") || errorMessage?.includes("mail") ? "error" : ""}
                      placeholder="Էլ․հասցե"
                      type="email"
                      required

                      name="mail"
                      value={inputVal?.mail}
                      onChange={(e) => {
                        if (!emailRegex.test(e.target.value.trim())) {
                          setErrorMail('Օգտագործեք վավեր էլ․հասցե    ')
                        } else {
                          setErrorMail('')
                        }

                        setInputVal({ ...inputVal, mail: e.target.value });
                        changeValidation(e.target.value, e.target.name);
                      }}
                    />
                    {error.includes("mail") && (
                      <span className="errorMessage">Այս դաշտը պարդադիր է</span>
                    )}
                    <br />

                    {errorMail && (
                      <span className="errorMessage">{errorMail}</span>
                    )}
                    <br />

                    {errorMessage.includes("mail") && (
                      <span className="errorMessage">
                        Մինիմում արժեքը 3 մաքսիմում 50
                      </span>
                    )}
                  </div>
                  <button type="submit" className="saveBtn" onClick={(e) => saveData(e)} >
                    Հաստատել
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTransferOne

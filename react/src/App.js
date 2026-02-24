import { Home } from "./pages/Home";
import React, {useEffect, useState,} from 'react';
import {Route,Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFaoundPage";
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import Modal1 from "./components/modal1/Modal1";
import GiftModal from "./components/GiftModal/GiftModal";
import CartTransferOne from "./components/CartTransferOne/CartTransferOne";
import CartTransferTwo from "./components/CartTransferTwo/CartTransferTwo";
import './Admin/scss/style.scss'
import OkModal from "./components/OkModal/OkModal";

const DefaultLayout = React.lazy(() => import('./Admin/layout/DefaultLayout'))

const Login = React.lazy(() => import('./Admin/views/pages/login/Login'))




function App() {
  const [childID,setChildID]=useState({})
  const path = window.location.pathname
  const [modal, setModal] = useState(false);
  const [buymodal, setBuyModal] = useState(false);
  const [buymodal1, setBuyModal1] = useState(false);
  const [transitonmodal, setTransitonmodal] = useState(false);
  const [succsses, setSuccsses] = useState(false);
  const [inputVal, setInputVal] = useState({
    child_id:childID?.id,
    name:"",
    surName:"",
    phoneNumber:"",
    mail:"",

  });

  // useEffect(()=>{
  //   if (!window.location.pathname.includes('/admin')) {
  //     localStorage.removeItem('auth');
  //   }

  // },[path])
  
  useEffect(()=>{
    if(window.location.pathname === "/admin"){
      window.location.pathname = "/admin/dashboard"
    }
  },[path]);


  return (
    <div className="App"  >
     {(!window?.location.pathname.includes("/admin"))&& <Header setModal={setModal} />}
     
    {modal && <Modal1 setModal={setModal} setBuyModal={setBuyModal} setTransitonmodal={setTransitonmodal} setChildID={setChildID} />}
    {buymodal && <CartTransferOne setBuyModal={setBuyModal} setModal={setModal} setBuyModal1={setBuyModal1} childID={childID} inputVal={inputVal} setInputVal={setInputVal} />}
    {buymodal1 && <CartTransferTwo setBuyModal={setBuyModal} setInputVal={setInputVal} setBuyModal1={setBuyModal1} setSuccsses={setSuccsses} inputVal={inputVal} childID={childID} />}
    {transitonmodal && <GiftModal setModal={setModal} setTransitonmodal={setTransitonmodal} setSuccsses={setSuccsses} childID={childID} />}
    {succsses && <OkModal setSuccsses={setSuccsses} setTransitonmodal={setTransitonmodal} setBuyModal={setBuyModal} setModal={setModal}  setBuyModal1={ setBuyModal1}   />}
      
    {!window?.location.pathname.includes("/admin")?( <> <Routes>
        <Route path="/" element={<Home setModal={setModal} />}/>
        <Route  path="*" element={<NotFoundPage/>}/>
      </Routes>
      {(!window?.location.pathname.includes("/admin")||!window?.location.pathname.includes("/login"))&& <Footer/>}
      </>)
      :(

        <Routes>
          <Route exact path="/admin/login" name="Login Page" element={<Login />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>

    )  }
    </div>
  );
}

export default App;

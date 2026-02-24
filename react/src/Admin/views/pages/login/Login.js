import React,{ useState } from 'react'    
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch } from 'react-redux'
import { LoginReq } from '../../../../Store/Action/LoginAction'
import {  useNavigate } from 'react-router-dom/dist'

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [auth,setAuth] = useState({});

  async function loginRequest(e){
      e.preventDefault();
      try{
         await dispatch(LoginReq(auth));
         navigate("/admin/dashboard")
      }catch(error){
          console.error(error);
      }
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-2">
                <CCardBody>
                  <CForm>
                    <h1>Մուտք</h1>
                    <p className="text-body-secondary">Մուտք գործեք ադմինի էջ</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Մուտքանուն" autoComplete="adminname" onChange={(e)=>{setAuth({...auth,adminname:e.target.value})}} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Գաղտնաբառ"
                        autoComplete="user-password"
                        onChange={(e)=>{setAuth({...auth,password:e.target.value})}}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={(e)=>loginRequest(e)}  >
                          Մուտք գործել
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
             
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

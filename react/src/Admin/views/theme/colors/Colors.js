/*eslint-disable */

import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,

} from '@coreui/react'
import Swal from "sweetalert2"
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilListNumbered,
  cilClosedCaptioning,
} from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getInActiveDream } from '../../../../Store/Action/WishAction'
import Pagination from '../../../components/Pagination'

const InActivePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInActiveDream());
  }, [dispatch]);

  const { InActive } = useSelector((state) => state.InActive);
  const [oneData,setOneData] = useState({});
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = InActive.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(()=>{
    if(oneData.id){
      showMoreInfo()
    }
  },[oneData?.id])


  function showMoreInfo() {
    Swal.fire({
      imageUrl: `${oneData?.image}`,
      // imageWidth: "70%",
      imageHeight: "400px",
      imageAlt: 'Person Image',
      title: `${oneData?.full_name}`,
      html: `
      <p>${oneData?.birth}</p>
      <p>${oneData?.age}</p>
    `,
      showCancelButton: true,
      cancelButtonText: "Հետ",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Լավ"
    }).then((res)=>{
      if(!res?.isDenied){
          setOneData({})
      }
    })

  }

  
  return (
    <>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader> Հրեշտակ չունեցող մասնակիցներ</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilListNumbered} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Մասնակից</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Ծրագրի մասնակից դարձել է
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilClosedCaptioning} />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index + 11}>
                      <CTableDataCell>
                        <div className="fw-semibold text-nowrap text-center">{item?.id}</div>

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.image} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.full_name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.age + " "}</span> |
                          {"    " + item.birth + "  "}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <span>{item.created_at}</span>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item?.payment?.icon} />
                        {/* <div className="text-center">
                            <input type='checkbox'
                              defaultChecked={item?.is_active}
                              onChange={() => changeActive(item?.id)}
                            />
                          </div> */}
                        <CButton onClick={() => setOneData(item)} >Տեսնել Ավելին</CButton>
                      </CTableDataCell>

                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
            <Pagination
                  totalItems={InActive.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  pagenumber={currentPage}
                />
          </CCard>
          
        </CCol>
      </CRow>
    </>
  )
}

export default InActivePage

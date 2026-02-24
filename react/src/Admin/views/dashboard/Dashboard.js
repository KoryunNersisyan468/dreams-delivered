/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../theme/AddAdmin/AddData.scss'
import { deleteAllWish, getAllWish } from "../../../Store/Action/AllWishAction"

import {
  CAvatar,
  CButton,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilX,
  cilXCircle,
  cilPen,
} from '@coreui/icons'

import { useDispatch, useSelector } from 'react-redux'
import DeleteAll from '../../components/DeleteComponent'
import Swal from 'sweetalert2'
import { fetchBenevolentUbdate } from '../../../Store/Slice/BenevolentSlice'
import { getBenevolentData } from '../../../Store/Action/BenevolentAction'
import GiftModal from './Gift'
import { editWish } from '../../../Store/Action/WishAction';
import EditComponent from './EditComponent';
import Pagination from '../../components/Pagination';
import axios from 'axios';


const Dashboard = () => {




  const dispatch = useDispatch()
  async function deleteItem(id) {
    await DeleteAll({
      title: "Ցանկանում եք ջնջել՞",
      text: "Ջնջելու դեպքում վերականգնել չեք կարող",
      deleteItem: () => dispatch(deleteAllWish(id))
    });
    dispatch(getAllWish());

  }
  useEffect(() => {
    dispatch(getAllWish());
  }, [dispatch]);

  const { Wish } = useSelector((state) => state.Wish);
  const { Benevolent } = useSelector((state) => state?.Benevolent);
  const [addBen, setAddBen] = useState(0)
  const [edit, setEdit] = useState('')
  const [img, setImg] = useState('');

  function showMoreBenevolentInfo() {
    Swal.fire({
      title: `${Benevolent[0]?.name + "    "}${Benevolent[0]?.surName}`,
      html: `
      <p>${Benevolent[0]?.mail}</p>
      <p>${Benevolent[0]?.phoneNumber}</p>

    `,
      showCancelButton: true,
      cancelButtonText: "Ջնջել հովանվորին",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Լավ"
    })
      .then((res) => {

        if (res?.isConfirmed) {
          dispatch(fetchBenevolentUbdate());
        }else{
          deleteBenevolent()
        }
      })
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Wish.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    if (Benevolent && Benevolent.length > 0) {
      showMoreBenevolentInfo();
    }
  }, [Benevolent]);

  async function showBenevolent(id) {
    await dispatch(getBenevolentData(id))
  }
  async function becomoeBen(id) {
    setAddBen(id);

  }
  
  async function deleteBenevolent(){
    const URL=process.env.REACT_APP_BASE_URL
    try{
      await axios.delete(`${URL}benevolents/delGift/${Benevolent[0]?.id}/${Benevolent[0]?.child_id}`)
    
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Հովանավորը հաջողությամբ ջնջվել է",
          showConfirmButton: false,
          timer: 2500
      })
      dispatch(getAllWish());

    }catch(err){

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Չհաջողվեց ջնջել հովանավորին!!!",
        showConfirmButton: false,
        timer: 2500
    })      
  }
  }
  return (
    <>{!edit ?
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader> Ամբողջ մասնակիցների ցուցակը</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Մասնակցի Id
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Մասնակից</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Ծրագրի մասնակից դարձել է
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">ՈՒնի հրեշտակ</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Հովանավորի առկայություն
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary"><CIcon icon={cilXCircle} /></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {currentItems?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index + 11}>
                      <CTableDataCell>
                        <div className="fw-semibold text-nowrap text-center">{item?.id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item?.image} />
                      </CTableDataCell>

                      <CTableDataCell>
                        <div>{item?.full_name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item?.age + " "}</span> |
                          {"    " + item?.birth + "  "}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <span>{item?.created_at}</span>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="text-center ">{item?.is_active ? "Այո" : "ոչ"}</div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item?.payment?.icon} />
                        <CButton
                          onClick={() => { item?.is_active ? showBenevolent(item?.id) : becomoeBen(item?.id) }} >{item?.is_active ? "Տեսնել Հովանավորին" : "Հովանավոր չի գտնվել"}</CButton>
                      </CTableDataCell>
                      <CTableDataCell  >
                        <CButton className="m-2" onClick={() => deleteItem(item?.id)} ><CIcon icon={cilX}
                        /></CButton>
                        <CButton className="m-2" onClick={() => setEdit(item)} ><CIcon icon={cilPen}
                        /></CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>

              </CTable>
            </CCardBody>
            <Pagination
              totalItems={Wish.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              pagenumber={currentPage}
            />
          </CCard>
        </CCol>
        {
          addBen !== 0 && <GiftModal addBen={addBen} setAddBen={setAddBen} />
        }
      </CRow> :
      <EditComponent edit={edit} setEdit={setEdit} img={img} setImg={setImg} />
    }
    </>
  )
}

export default Dashboard



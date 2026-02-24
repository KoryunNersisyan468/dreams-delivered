/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { Button, FormGroup, FormLabel, FormControl, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import { cilPlus, } from '@coreui/icons';
import uploadImageHandleradd from '../../../Store/Action/UploadImageAction';
import './AddActivity.scss';
import { addActivity, editActivity, getActivity } from '../../../Store/Action/ActivityAction';
import { cilTrash } from '@coreui/icons'
import Swal from 'sweetalert2';

const AdminAddData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 1;
    const yearsArray = Array.from({ length: 15 }, (_, i) => currentYear - i);
    const [img, setImg] = useState("");
    const dispatch = useDispatch();
    const { Activity, loading } = useSelector((state) => state?.Activity)
    const [activityItem, setActivityItem] = useState({ description: "Այս տարի ընտրել ենք Գեղարքունիքի մարզի Գանձակ, Ծաղկաշեն և Գեղարքունիք գյուղերի շուրջ 200 երեխաների։" })
    const [selectValue, setSelectValue] = useState("");
    const [error, setError] = useState({});
    useEffect(() => {
        if (selectValue) {
            dispatch(getActivity(selectValue));
        }
    }, [dispatch, selectValue])

    useEffect(() => {
        {
            Activity?.length > 0 ?
                setActivityItem(Activity[0]) :
                setActivityItem({
                    description: "Այս տարի ընտրել ենք Գեղարքունիքի մարզի Գանձակ, Ծաղկաշեն և Գեղարքունիք գյուղերի շուրջ 200 երեխաների։",
                    year: selectValue
                })

        }
    }, [Activity])

    useEffect(() => {
        if (img?.length > 0) {
            if (activityItem?.photos) {
                let newPhotos = [...activityItem?.photos, img]
                setActivityItem({ ...activityItem, photos: newPhotos })
            } else {
                setActivityItem({ ...activityItem, photos: [img] })
            }
            setImg('')
        }
    }, [img])



    function sendToSave(e) {
        e.preventDefault();
        const newActiveItem = { ...activityItem }
        if (activityItem.hasOwnProperty('created_at')) {
            delete newActiveItem?.created_at

        }
        if (activityItem.hasOwnProperty('updated_at')) {
            delete newActiveItem?.updated_at

        }


        try {
            Activity?.length == 0 ? dispatch(addActivity(newActiveItem, setError)) :
                dispatch(editActivity(newActiveItem, newActiveItem?.id, setError))
        }
        catch (error) {
            console.error(error);
        }
        setSelectValue("");
    }

    function DeleteImage(idx) {
        let newPhotos = activityItem?.photos?.filter((el, index) => index !== idx)
        setActivityItem({ ...activityItem, photos: newPhotos })
    }



    useEffect(() => {
        if (error === 'ok') {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Տվըալները հաջողությամբ հաստատվել են",
                showConfirmButton: false,
                timer: 2500
            }).then(()=>{
                setError("")
            });
        }
        if (error?.response?.status < 200 || error?.response?.status >= 400) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Որևէ սխալ կա փորցեք կրկին",
                showConfirmButton: false,
                timer: 2500
            }).then(()=>{
                setError("")
            });
        }

    }, [error])

    return (
        <div className="AdminActivityData">
            <div className="body">
                <form autoCapitalize="off">
                    <h1>Ավելացնել Տվյալներ</h1>

                    <select onChange={(e) => { setSelectValue(e.target.value); setActivityItem({ ...activityItem, year: e.target.value }) }} value={selectValue}  >
                        <option hidden>Ընտրեք Տարեթիվը</option>
                        {
                            yearsArray?.map((el, index) => {
                                return (
                                    <option key={index+1} >{el}</option>
                                )
                            })
                        }
                    </select>
                    {selectValue && <div>


                        <FormGroup >
                            <FormGroup className="flex items-center justify-between w-[50%] upload-image-label">

                                <FormControl
                                    style={{ display: 'none' }}
                                    type="file"
                                    name="addPersonImage"
                                    id="addPersonImage"
                                    value=''
                                    onChange={(e) => {
                                        dispatch(uploadImageHandleradd(e, setImg));
                                    }}
                                    accept="image/*"
                                />
                            </FormGroup>
                            <div className="images">
                                {
                                    activityItem?.photos && activityItem?.photos?.map((el, index) => {
                                        return (
                                            <div key={index+1} className="imageContainer" >
                                                <img src={el} alt="Photo" className="uploaded-image" />
                                                <div className=' deleteDiv'><CIcon onClick={() => { DeleteImage(index) }} icon={cilTrash} size='xl' /></div>
                                            </div>
                                        )
                                    })
                                }
                                <FormLabel htmlFor="addPersonImage" className="imageContainer">
                                    Ավելացրեք  {activityItem?.photos ? 10 - activityItem?.photos?.length : 10} նկար<CIcon icon={cilPlus} size='xl' />
                                </FormLabel>
                            </div>

                            <FormLabel htmlFor="description">Հաղորդագրություն</FormLabel>
                            <FormControl
                                as={"textarea"}
                                id="letter"
                                placeholder="Letter"
                                rows={6}
                                value={activityItem?.description}
                                onChange={(e) => setActivityItem({ ...activityItem, description: e.target.value })}
                                required
                            />
                        </FormGroup>


                        <FormGroup className="button">
                            <Button color="primary" onClick={(e) => sendToSave(e)} >
                                Ուղարկել
                            </Button>
                        </FormGroup>
                    </div>}
                </form>
            </div>
        </div>
    );
};

export default AdminAddData;
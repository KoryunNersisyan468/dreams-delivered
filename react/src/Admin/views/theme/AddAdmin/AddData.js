import './AddData.scss';
import React, { useEffect, useState } from 'react';
import { Button, FormGroup, FormLabel, FormControl, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addWish } from '../../../../Store/Action/WishAction';
import uploadImageHandleradd from '../../../../Store/Action/UploadImageAction';
import { Eddditor } from './LinkEditor';
import Swal from 'sweetalert2';

const AdminAddData = () => {
    const [santa, setSanta] = useState({
        age: "",
        letter: "",
        full_name: "",
        birth: "",
    });
    const [img, setImg] = useState('');
    const dispatch = useDispatch();
    const [error, setError] = useState({})

    useEffect(() => {
        if (error === 'ok') {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Տվըալները հաջողությամբ հաստատվել են",
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                setError("")
                setSanta({
                    age: "",
                    letter: "",
                    full_name: "",
                    birth: "",
                });
                setImg("");
            });
        }
        if (error?.response?.status < 200 || error?.response?.status >= 400) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Լրացրեք բոլոր դաշտերը!!!",
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                setError("")
            });
        }
    }, [error])
    async function addToSave(e) {
        e.preventDefault();
        // if(!img)setImgError(true)
        try {
            const obj = {
                ...santa,
                image: img,
            };
            dispatch(addWish(obj, setError));         
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="AdminAddData">
            <div className="body">
                <form className='addForm' autoCapitalize="off" >
                    <h1>Ավելացնել Ցանկություն</h1>
                    <FormGroup className="">
                        <FormLabel htmlFor="addPersonImage">
                            Նկար*
                            {/* <CIcon icon={cilPlus} /> */}
                            <div className="imageContainer">{img ? <img src={img} alt="uploading now images" className="uploaded-image" /> : <img src='/images/addImage.png' alt='addimage' className=' cursor-pointer' name='addPersonImage' />}</div>
                        </FormLabel>
                        <FormControl
                            style={{ display: 'none' }}
                            type="file"
                            value=''
                            name="addPersonImage"
                            id="addPersonImage"
                            onChange={(e) => {
                                dispatch(uploadImageHandleradd(e, setImg));
                            }}
                            accept="image/*"
                        />
                    </FormGroup>
                    <div id='nameAge'>
                        <FormGroup>
                            <FormLabel htmlFor="fullname">Անուն Ազգանուն*</FormLabel>
                            <FormControl
                                type="text"
                                id="fullname"
                                placeholder="Անուն Ազգանուն"
                                required
                                value={santa?.full_name}
                                onChange={(e) => setSanta({ ...santa, full_name: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="birth">Ծննդավայր*</FormLabel>
                            <FormControl
                                type="text"
                                id="birth"
                                placeholder="Ծննդավայր"
                                required
                                value={santa?.birth}
                                onChange={(e) => setSanta({ ...santa, birth: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="age">Տարիք*</FormLabel>
                            <FormControl
                                type="number"
                                id="age"
                                placeholder="Տարիք"
                                required
                                min={1}
                                max={50}
                                value={santa?.age}
                                onChange={(e) => setSanta({ ...santa, age: e.target.value })}
                            />
                        </FormGroup>
                    </div>

                    <FormGroup className='mt-5' >
                        <FormLabel >Նվերի առաջարկներ*</FormLabel>

                        <Eddditor value={santa} setValue={setSanta} />
                    </FormGroup>

                    <FormGroup className="button">
                        <Button color="primary" onClick={(e) => addToSave(e)}>
                            Ուղարկել
                        </Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    );
};

export default AdminAddData;

import { cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React from 'react'
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import uploadImageHandleradd from '../../../Store/Action/UploadImageAction';
import { useDispatch } from 'react-redux';
import { editWish } from '../../../Store/Action/WishAction';
import { getAllWish } from '../../../Store/Action/AllWishAction';
import { Eddditor } from '../theme/AddAdmin/LinkEditor';

const EditComponent = ({ edit, setEdit, img, setImg }) => {
    const dispatch = useDispatch();
    async function editToSave(e) {
        e.preventDefault()
        await dispatch(editWish({ ...edit, image: img }));
        await dispatch(getAllWish());
        setEdit('')
    }

    return (
        <div className="AdminAddData">


            <div className="body">
                <form className=' editForm' autoCapitalize="off">
                    <h1>Փոփոխել մասնակցի տվյալները</h1>
                    <FormGroup className="upload-image-label">
                        <FormLabel htmlFor="addPersonImage">
                            Փոփոխել Նկար <CIcon icon={cilPlus} />
                        </FormLabel>
                        <div className="imageContainer">{edit?.image ? <img src={img || edit?.image} alt="uploading now images" className="uploaded-image" /> : <div><CIcon icon={cilPlus} /></div>}</div>
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

                    <FormGroup>
                        <FormLabel htmlFor="fullname">Անուն Ազգանուն</FormLabel>
                        <FormControl
                            type="text"
                            id="fullname"
                            placeholder="Անուն Ազգանուն"
                            required
                            value={edit?.full_name}
                            onChange={(e) => setEdit({ ...edit, full_name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="birth">Ծննդավայր</FormLabel>
                        <FormControl
                            type="text"
                            id="birth"
                            placeholder="Ծննդավայր"
                            required
                            value={edit?.birth}
                            onChange={(e) => setEdit({ ...edit, birth: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="age">Տարիք</FormLabel>
                        <FormControl
                            type="number"
                            id="age"
                            placeholder="Տարիք"
                            required
                            value={edit?.age}
                            onChange={(e) => setEdit({ ...edit, age: e.target.value })}
                        />
                    </FormGroup>

                    {/* <FormGroup>
                        <FormLabel htmlFor="letter">Նամակ</FormLabel>
                        <FormControl
                            as={"textarea"}
                            id="letter"
                            placeholder="Letter"
                            rows={8}
                            cols={12}
                            onChange={(e) => setEdit({ ...edit, letter: e.target.value })}
                            required
                            value={edit?.letter}
                        />
                    </FormGroup> */}
                    <FormGroup className='mt-5' >
                        <Eddditor value={edit} setValue={setEdit} />
                    </FormGroup>
                    <FormGroup className="button">
                        <Button className="m-2" color="primary" onClick={(e) => editToSave(e)}>
                            Ուղարկել
                        </Button>
                        <Button className="m-2" color="primary" onClick={(e) => setEdit('')}>
                            Փակել
                        </Button>
                    </FormGroup>
                </form>
            </div>
        </div>
    )
}

export default EditComponent
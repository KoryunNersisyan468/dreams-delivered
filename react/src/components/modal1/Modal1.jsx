import { useEffect, useState } from 'react'
import './modal1.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getOneWish } from '../../Store/Action/OneWish'
import { Loading } from '../Loading'
import CIcon from '@coreui/icons-react'
import { cilCaretLeft, cilCaretRight } from '@coreui/icons'



const Modal1 = ({ setModal, setBuyModal, setTransitonmodal, setChildID }) => {

    const { OneWish, loading } = useSelector((state) => state?.OneWish);
    const [data, setData] = useState([OneWish[0]])
    const [count, setCount] = useState(1)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneWish())
    }, [dispatch])

    useEffect(() => {
        if ((OneWish?.length > 0 || OneWish[0] !== undefined)) {
            !data && setData([OneWish[0]]);
        }
    }, [OneWish, data])


    function buymodal() {
        setChildID(data[0])
        setTransitonmodal(true)
        setModal(false)
    }
    function transitionmodal() {
        setChildID(data[0])
        setBuyModal(true)
        setModal(false)
    }

    async function NextChild(e) {
        e.preventDefault()
        if (count < OneWish?.length) {
            setCount(count + 1);
            setData([OneWish[count]])
        }

    }
    async function PrevChild(e) {
        e.preventDefault()
        if (count > 1) {
            setCount(count - 1)
            setData([OneWish[count - 2]])
        }
    }


    return (
        <div className='Modal1One'>
            <div className="modal"  >
                <div className="container" >
                    <div className='close' onClick={() => setModal(false)} >     <img src="/images/CloseIcon.png" alt="CloseIcon" /></div>
                    <div className="conta">
                        {loading && <Loading />}
                        {
                            !loading && OneWish?.length > 0 && data?.map((el, index) => {
                                return (
                                    <div key={el?.id+index} >
                                        <div className='topBlock' >

                                            <p className="title">{el?.full_name + "  "} {el?.age }<span>տ.{'   '}</span>{el?.birth}</p>

                                            <div className="imageContainer">
                                                <img src={el?.image} alt={el?.full_name} />
                                            </div>

                                            <div className="buttons">
                                                <div className="leftBtn">
                                                    <button onClick={() => transitionmodal()}>Գնել առցանց</button>
                                                    <div className="textContainer" >
                                                        <p> Գրանցվեք և գնեք նվերը, անցնելով</p>
                                                        <p>առցանց խանութի հղումով։</p>
                                                    </div>
                                                </div>
                                                <div className="rightBtn">
                                                    <button className='btnLeft2' onClick={() => buymodal()}>Վերցնել նամակը</button>
                                                    <div className="textContainer" >
                                                        <p>Գրանցվեք, գնեք նվերը և  </p>
                                                        <p>մոտեցրեք</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="bottomBlock">
                                            <hr className="line" />
                                            <div className="nextPrevButtons">
                                                <div className="prev" onClick={(e) => PrevChild(e)}>
                                                <CIcon icon={cilCaretLeft} />
                                                </div>
                                                <div className="count">Տեսնել հաջորդ նամակը {count}/{OneWish?.length}</div>
                                                <div className="next" onClick={(e) => NextChild(e)}>
                                                    <CIcon icon={cilCaretRight} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal1
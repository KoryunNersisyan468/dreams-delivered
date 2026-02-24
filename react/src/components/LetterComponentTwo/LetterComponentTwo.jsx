/*eslint-disable */
import React, { useEffect } from 'react'
import "./LetterComponentTwo.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getActivity } from '../../Store/Action/ActivityAction'
import { Loading } from '../Loading'
const LetterComponentTwo = ({ year, yearsArray, setShowTwoCom, setYear }) => {

    const dispatch = useDispatch()
    const { Activity, loading } = useSelector((state) => state?.Activity)
    useEffect(() => {
        dispatch(getActivity(yearsArray[year]));
    }, [dispatch, year])


    return (
        <div className='LetterComponentTwo' >
            <div className='ballonImages'>
                <div>
                    <div className="imgConta">
                        <div className="img1" onClick={() => setShowTwoCom(false)} >
                            <img src="/images/allBallon.png" alt="click see to all ballons" />
                        </div>
                        <div className="img2">
                            <img src="/images/allBallonNum.png" alt="this year" />
                            <p className={'yearNumber '}>{yearsArray[year]}</p>
                        </div>
                    </div>
                    <p className="ballonText">{Activity[0]?.description}</p>
                </div>
                <div className='but' >
                    {yearsArray[0] !== yearsArray[year] &&<div onClick={() => { yearsArray[0] !== yearsArray[year] && setYear(year - 1) }} ><img src='/images/PrevBtn.png' alt='click to prev year' /><p>{yearsArray[year - 1] }</p></div>}
                    {yearsArray[yearsArray?.length - 1] !== yearsArray[year]&&<div onClick={() => { yearsArray[yearsArray?.length - 1] !== yearsArray[year] && setYear(year + 1) }} ><img src='/images/NextBtn.png' alt='click to prev year' /><p>{yearsArray[year + 1]}</p></div>}
                </div>

            </div>
            {loading ? <Loading /> : <div className='imageGalery'>
                <div className='imageBox' >
                    <div className="item1">
                        {Activity[0]?.photos[0] && <div className='item1Child1' >  <img src={Activity[0]?.photos[0]} alt="1" /></div>}
                        {Activity[0]?.photos[1] && <div className='item1Child2' > <img src={Activity[0]?.photos[1]} alt="2" /></div>}
                    </div>
                    <div className="item2">
                        {Activity[0]?.photos[2] && <div className='Item2Child'><img src={Activity[0]?.photos[2]} alt="3" /></div>}
                        {Activity[0]?.photos[3] && <div className='Item2Child'><img src={Activity[0]?.photos[3]} alt="4" /></div>}
                        {Activity[0]?.photos[4] && <div className='Item2Child'><img src={Activity[0]?.photos[4]} alt="5" /></div>}
                    </div>
                    <div className="item1">
                        {Activity[0]?.photos[5] && <div className='item1Child1' >  <img src={Activity[0]?.photos[5]} alt="1" /></div>}
                        {Activity[0]?.photos[6] && <div className='item1Child2' > <img src={Activity[0]?.photos[6]} alt="2" /></div>}
                    </div>
                    <div className="item2">
                        {Activity[0]?.photos[7] && <div className='Item2Child' ><img src={Activity[0]?.photos[7]} alt="3" /></div>}
                        {Activity[0]?.photos[8] && <div className='Item2Child' ><img src={Activity[0]?.photos[8]} alt="4" /></div>}
                        {Activity[0]?.photos[9] && <div className='Item2Child' ><img src={Activity[0]?.photos[9]} alt="5" /></div>}
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default LetterComponentTwo
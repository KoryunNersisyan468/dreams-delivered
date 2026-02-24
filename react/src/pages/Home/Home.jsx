import "./Home.scss";
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import MainComponent from '../../components/MainComponent/MainComponent';
import AboutComponent from '../../components/AboutComponent/AboutComponent';
import { useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { getOneWish } from '../../Store/Action/OneWish'

const Home = ({setModal}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOneWish());
}, [dispatch]);

  return (
    <div className='Home' >
      <div className="container">

      <div className='headerHome' >
        <HomeHeader setModal={setModal} />
      </div>

      <div className="main">
          <MainComponent setModal={setModal} />
      </div>

      <div className="aboutUs">
        <AboutComponent/>
      </div>
      </div>
    </div>
  )
}

export default Home

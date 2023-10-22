import {React,useContext} from 'react'
import CarouselSection from '../components/CarouselSection'
import Sidebar from '../components/Sidebar'
import { MovieContext } from '../context/Context'

const Home = () => {


  return (
    <div className='grid grid-cols-5 h-screen'>
    <div>
      <Sidebar />
    </div>
    <div className='col-span-4'>
      <CarouselSection />  
    </div>
  </div>
);
}
export default Home
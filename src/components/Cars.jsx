import React from 'react'
import Data from '../Data/Data'
/* react icons */
import {LuFuel} from 'react-icons/lu'
import { RiSpeedUpLine } from "react-icons/ri";
import { BsGearWideConnected } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";


const Cars = () => {
  return (
    <div >
      <h2 className=' font-bold text-3xl text-center my-16'>Most Searched Cars</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-6 mx-24'>

      {
        Data.Cars.map((car,index) => (
          <div key={index} className=' w-[300px]'> 
            <img src={car.img} alt="carimg" width={300} height={250} className=' rounded-t-xl bg-black ' />
            <div className=' p-4'>
              <h2 className=' font-bold text-black text-lg mb-2'>{car.name}</h2>
              <div className='grid grid-cols-3 my-15'>
                <div className='flex flex-col items-center'>
                  <LuFuel className='text-lg mb-2'/>
                  <h2>Miles</h2>
                </div>
                <div className='flex flex-col items-center'>
                  <RiSpeedUpLine className='text-lg mb-2'/>
                  <h2>Speed</h2>
                </div>
                <div className='flex flex-col items-center'>
                  <BsGearWideConnected className='text-lg mb-2'/>
                  <h2>Gear</h2>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold text-xl'>1,000,000ETB</h2>
                  <h2 className=' text-primary text-sm flex gap-2 items-center'>
                   View Details <MdOpenInNew /></h2>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cars
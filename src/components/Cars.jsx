import React from 'react'
import Data from '../Data/Data'
/* react icons */
import {LuFuel} from 'react-icons/lu'
import { RiSpeedUpLine } from "react-icons/ri";
import { BsGearWideConnected } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';


const Cars = () => {
  return (
    <div >
      <h2 className=' font-bold text-3xl text-center my-16'>Most Searched Cars</h2>
      
      <div className="flex justify-center items-center space-x-2 mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search cars..."
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>


      <div className=' flex justify-between items-center flex-wrap gap-6 mx-24'>

      {
        Data.Cars.map((car,index) => (
          <div key={index} className=' w-[300px] rounded-xl bg-white border hover:shadow-md cursor-pointer'> 
            <img src={car.img} alt="carimg" width={300} height={250} className=' rounded-t-xl bg-black ' />
            <div className=' p-4'>
              <h2 className=' text-center font-bold text-black text-lg mb-2'>{car.name}</h2>
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
              <div className='flex justify-between items-center mt-5'>
                <h2 className='font-bold text-xl'>1,000,000 ETB</h2>
                  <h2 className='  text-md flex gap-2 items-center'>
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
import React from 'react'
import Data from '../Data/Data'
const Cars = () => {
  return (
    <div>
      <h2 className=' font-bold text-3xl text-center my-16'>Most Searched Cars</h2>
      {
        Data.Cars.map((car,index) => (
          <div key={index} className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6'>
            <div>
            <img src={car.img} alt="carimg" width={300} height={250} className=' rounded-t-xl bg-black ' />
            <div className=' p-4'>
              <h2 className=' font-bold text-black text-lg mb-2'>{car.name}</h2>
             </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cars
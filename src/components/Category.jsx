import React from 'react'
import Data from '../Data/Data'

const Category = () => {
  return (
    <div className='mt-20'>
      <h2 className=' font-bold text-3xl text-center mb-6 '>Browse By Type</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
        {
          Data.Category.map((category,index) => (
            <div key={index} className='border rounded-xl p-3 flex flex-col items-center hover:shadow-md cursor-pointer'>
              <img src={category.icon} alt="brand" width={35} height={35} />
              <h2 className='mt-2'>{category.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category
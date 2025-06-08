import React from 'react'

const Card = ({img, parr}) => {
  return (
    <div>
      <div className='h-[25vh] w-[90%] bg-white rounded-lg shadow-xl hover:shadow-none shadow-gray-400 cursor-pointer flex justify-between items-center mt-10'>
        <img className='w-[50%] h-full' src={img} alt="" />
        <p className='font-extrabold text-4xl font-mono '>{parr}</p>
      </div>
    </div>
  )
}

export default Card

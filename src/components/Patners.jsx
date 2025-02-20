import React from 'react'

const Patners = () => {
  let ourPartners = ['partner1', 'partner2', 'partner3', 'partner4', 'partner5']
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <p className='text-white'>Supported by</p>
      <div className='flex flex-row justify-center items-center gap-20 flex-wrap p-5'>
        {ourPartners.map((partner) => (
          <p className='text-white uppercase bold p-2 box-border px-10 hover:border border-amber-50'> {partner} </p>
        ))}
      </div>
    </div>
  )
}

export default Patners

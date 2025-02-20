import React from 'react'

const Patners = () => {
  let ourPartnerss = ['partner1', 'partner2', 'partner3', 'partner4', 'partner5']
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <p className='text-white'>Supported by</p>
      <div className='flex flex-row justify-center items-center gap-50 p-5'>
        {ourPartnerss.map((partner) => (
          <p className='text-white uppercase bold'> {partner} </p>
        ))}
      </div>
    </div>
  )
}

export default Patners

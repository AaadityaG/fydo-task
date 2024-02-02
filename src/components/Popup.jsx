import React from 'react'
import Banner from '../assets/HeroBanner.png'

import GOrderCard from './GOrderCard'
import VOrderCard from './VOrderCard'
import OrderSummary from './OrderSummary'

const Popup = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 z-20 flex items-center justify-center '>

          <div className='md:w-3/4 lg:w-3/5 flex p-12 pt-16 lg:mt-10  items-center justify-center flex-col bg-[white] rounded-lg '>
            
            <div className='grid grid-cols-2 grid-auto-min text-[black] gap-3'>
                <div className='md:col-span-1 md:row-span-1 row-span-1 col-span-1'>
                  <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Casa Bacardi on Tour Ft. KING | Bhubaneswar</h1>
                </div>
                <div className='md:col-span-1 md:row-span-2 col-span-1 row-span-1'>
                    <img src={Banner} alt="" />
                </div>
                <p className='md:col-span-1 md:row-span-1 col-span-2 row-span-0 text-[#667085] mt-2'>
                  Dream City Resort  •  Friday, 16th January 2024  •  5 PM Onwards
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:flex-row my-10 w-full md:flex-row'>
              <div className='lg:flex lg:flex-col lg:gap-7 lg:w-full w-full flex flex-col gap-5 overflow-y-auto lg:max-h-[300px] max-h-[200px] md:max-h-[400px]'>
                <GOrderCard title={"General Admission"}/>
                <VOrderCard title={"VIP Admission"}/>
              </div>
              <OrderSummary/>
            </div>
          </div>

    </div>
  )
}

export default Popup

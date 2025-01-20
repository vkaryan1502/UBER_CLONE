import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png)] h-screen pt-5 flex justify-between flex-col w-full '>
            <img className='w-16 ml-8 text-white text-2xl font-bold' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="Uber" srcset="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
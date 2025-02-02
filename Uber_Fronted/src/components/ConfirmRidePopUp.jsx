import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault
  }

  return (
    <div>
    <h5
      className="p-1 text-center w-[93%] absolute top-0"
      onClick={() => {
        props.setRidePopUpPanel(false);
      }}
    >
      <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-5">Finish this ride to Start</h3>
      <div className='flex items-center justify-between mt-4 bg-yellow-400 rounded-lg p-3'>
          <div className='flex items-center gap-3 '>
              <img className='w-12 h-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkwpnYRjl2nRdc089vCDCqU57NtWDZeWBonhpqHnJmhyLZnFfk6L-LJI&s" alt="" />
              <h2 className='text-lg font-medium'>Aryan Raj</h2>
          </div>
          <h5 className='text-lg font-semibold'>2.2KM</h5>
      </div>

    <div className="flex gap-2 justify-center flex-col items-center">
      
      <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2"> 
          <i className="ri-map-pin-user-fill"></i>
          <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
          </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab, Bhopal</p>
          </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-currency-line"></i>
          <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm text-gray-600">Cash Cash</p>
          </div>
          </div>
      </div>



     <div className='mt-6 w-full'>
     <form onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input value={otp} onChange={(e)=>{
        setOtp(e.target.value)
      }} className="bg-[#eee] px-6 py-3 font-mono text-lg rounded-lg w-full  mt-3" type="text" placeholder='Enter OTP' />
     <Link to='/captain-riding' className="w-full bg-green-600 flex justify-center text-white font-semibold p-3 rounded-lg mt-5">Confirm</Link>
      
      <button 
        onClick={()=>{
            props.setConfirmRidePopUpPanel(false)
         props.setRidePopUpPanel(false)
        }} className="w-full bg-red-600 text-white font-semibold p-3 rounded-lg mt-2">Cancel</button>
      
     </form>
     </div>
        
    </div>
  </div>
  )
}

export default ConfirmRidePopUp
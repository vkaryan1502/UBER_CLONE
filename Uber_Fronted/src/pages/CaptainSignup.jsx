import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      password: password,
      email: email
    })
      
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber" /> 

        <form onSubmit={ (e) => {
          submitHandler(e)
          }}>
          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
          <input
            required 
            value={firstName}
            onChange={(e) =>{
              setFirstName(e.target.value)
            }}
            className='bg-[#eeeeee]  rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text"
            placeholder='First name'
          />
          <input
            required 
            value={lastName}
            onChange={(e) =>{
              setLastName(e.target.value)
            }}
            className='bg-[#eeeeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text"
            placeholder='Last name'
          />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input
            required 
            value={email}
            onChange={(e) =>{
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm'
            required 
            value={password}
            onChange={(e) =>{
              setPassword(e.target.value)
            }}
            type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-base placeholder:text-sm'
          >Sign up</button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-xs text-[#828181] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default CaptainSignup
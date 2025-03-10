import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = React.useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {      
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        password: password,
        email: email
      }
    
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)


      if(response.status === 201){
        const data = response.data
        
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
     
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

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
          >Create account</button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-xs text-[#828181] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup


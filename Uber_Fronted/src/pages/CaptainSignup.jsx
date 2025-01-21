import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [userData, setUserData] = useState({})
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData ={
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }

    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
      
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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

<h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-3'>
          <input
            required 
            value={vehicleColor}
            onChange={(e) =>{
              setVehicleColor(e.target.value)
            }}
            className='bg-[#eeeeee]  rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text"
            placeholder='Color'
          />
          <input
            required 
            value={vehiclePlate}
            onChange={(e) =>{
              setVehiclePlate(e.target.value)
            }}
            className='bg-[#eeeeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text"
            placeholder='Plate'
          />
          </div>
          
          <div className='flex gap-4 mb-3'>
          <input
            required 
            value={vehicleCapacity}
            onChange={(e) =>{
              setVehicleCapacity(e.target.value)
            }}
            className='bg-[#eeeeee]  rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="number"
            placeholder='Capacity'
          />
          <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-base placeholder:text-sm'
          >Create captain account</button>

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
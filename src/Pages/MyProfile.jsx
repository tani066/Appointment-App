import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { auth, db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'

const MyProfile = () => {
  const [userDetails, setUserDetails] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'Users', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const data = docSnap.data()
          setUserDetails(data)
          setUserData({
            name: data.name || '',
            image: assets.profile_pic,
            email: data.email || '',
            phone: data.phone || 'Enter your phone number',
            address: {
              line1: data.address?.line1 || 'Enter your address',
              line2: data.address?.line2 || 'Landmark, City',
            },
            gender: data.gender || 'Select',
            dob: data.dob || 'Enter your date of birth',
          })
        } else {
          console.log('No such document!')
        }
      }
    })

    return () => unsubscribe()
  }, [])

  if (!userData) return <p>Loading...</p>

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit ?
        <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" placeholder={userData.name} onChange={(e) => setUserData({...userData, name : e.target.value})} /> :
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          {
            isEdit ?
            <input className='bg-gray-100 max-w-52' type="email" value={userData.email} onChange={(e) => setUserData({...userData, email : e.target.value})} /> :
            <p className='text-blue-500'>{userData.email}</p>
          }
          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
            <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={(e) => setUserData({...userData, phone : e.target.value})} /> :
            <p className='text-neutral-500'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
            <>
              <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={(e) => setUserData((prev) => ({...prev, address : {...prev.address, line1 : e.target.value}}))} />
              <br />
              <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={(e) => setUserData((prev) => ({...prev, address : {...prev.address, line2 : e.target.value}}))} />
            </>
            :
            <p className='text-gray-500'>
              {userData.address.line1}<br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
            <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData((prev) => ({...prev , gender : e.target.value}))} value = {userData.gender}>
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            :
            <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit ?
            <input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={(e) => setUserData((prev) => ({...prev , dob : e.target.value}))} />
            :
            <p className='text-gray-400'> {userData.dob} </p>
          }
        </div>
      </div>
      <div className='mt-10'>
        <button
          className={`border px-8 py-2 rounded-full transition-all duration-400 ${isEdit ? 'border-blue-500 hover:bg-blue-500 hover:text-white' : 'border-gray-500 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? 'Save information' : 'Edit'}
        </button>
      </div>
    </div>
  )
}

export default MyProfile

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/Context'
import { assets } from '../assets/assets'
import RelatedDoctors from '../Components/RelatedDoctors';


const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const Appointment = () => {
  const { docId } = useParams()
  const { doctors , currencySymbol } = useContext(Context)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(1)
  const [slotTime, setSlotTime] = useState('')


  const getAvailableSlots = async () => {
    setDocSlots([])

    let today = new Date()
    for(let i=0; i<7; i++){
      let currentDate = new Date(today)
      currentDate.setDate(currentDate.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      if(today.getDate()==currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
    }else{
      currentDate.setHours(10)
      currentDate.setMinutes(0)
    }

    let timeSlots  = []


    while(currentDate<endTime){
      let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      timeSlots.push({
        dateTime : new Date(currentDate),
        time : formattedTime,
      })

      currentDate.setMinutes(currentDate.getMinutes() + 30)
    }
    
    setDocSlots(prev => ([...prev,timeSlots]))
  }}

  useEffect(() => {
    if (doctors?.length > 0) {
      const foundDoctor = doctors.find(doc => doc._id === docId)
      setDocInfo(foundDoctor || null)
    }
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots();
  }, [])

  useEffect(() => {
    console.log(docSlots)
  },[docSlots])

  if (!docInfo) {
    return <p>Loading doctor details...</p>
  }

  return docInfo && (
    <div>
      {/* ---Doctor details--- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-[#3f5fff] w-full sm:max-w-72 rounded-lg' src={docInfo.image || 'default.jpg'} alt={docInfo.name || 'Doctor'} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 pt-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 flex flex-col gap-4'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>        
        

        {/* Doctor's About */}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol} {docInfo.fees*10}</span></p>
        </div>
      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {
              docSlots.length && docSlots.map((item,index)=> (
                <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? "bg-[#3f5fff] text-white" : "border border-gray-200"}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))
            }
          </div>
      </div>
      
      <div className='flex items-center w-full overflow-x-scroll gap-3 mt-6'>
        {docSlots.length && docSlots[slotIndex].map((item,index)=> (
          <div onClick={()=> setSlotTime(item.time)} className={`text-sm border-2 rounded-full px-5 py-2 font-light flex-shrink-0 border-gray-300 cursor-pointer ${slotTime===item.time ? "bg-[#3f5fff] text-white" : "text-gray-700"}`} key={index}>
            <p>{item.time}</p>
            <p>{item.dateTime.toLocaleDateString()}</p>
          </div>
        ))}

      </div>

      <div >
        <button className='bg-[#3f5fff] rounded-full px-5 py-3 mt-12 text-white font-light text-lg'>Book an Appointment</button>
      </div>

      <RelatedDoctors docId = { docId } speciality = { docInfo.speciality }/>
    </div>
  )
}


export default Appointment

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth , db} from './firebase'
import { doc, setDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(state === 'Sign Up'){
      try{
        await createUserWithEmailAndPassword(auth, email, password)
        const user = auth.currentUser;
        console.log(user)
        if(user){
          await setDoc(doc(db,'Users',user.uid),{
           email:user.email,
           name:name,

          })
        }
        console.log('user regestered successfully')
        toast.success('User registered successfully',{
          position : 'top-center',
        })
        setState('Login')
        setEmail('')
        setPassword('')
        setName('')
      }catch(error){
        console.log(error)
        toast.error(error.message,{
          position : 'bottom-center',
        })
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth, email, password)
        console.log('user logged in successfully')
        toast.success('User logged in successfully',{
          position : 'top-center',
        })
        window.location.href = '/'
      }catch(error){
        console.log(error)
        toast.error(error.message,{
          position : 'bottom-center',
        })
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto p-8 min-w-[340px] sm-min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state==='Sign Up' ? 'sign up' : 'login'} to book appointment</p>
        {state === 'Sign Up' &&
        <div className='w-full'>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required/>
      </div>}
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>

        <button className='bg-[#5f6fff] text-white w-full py-2 rounded-md text-base cursor-pointer'>{state==='Sign Up' ? 'Create Account' : 'Login'}</button>

      {
        state === 'Sign Up' ? 
        <p className='text-center'>Already have an account? <span onClick={() => setState('Login')} className='text-[#5f6fff] underline cursor-pointer'>Login</span></p> :
        <p className='text-center'>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-[#5f6fff] underline cursor-pointer'>Create Account</span></p>
      }

      </div>
    </form>
  )
}

export default Login
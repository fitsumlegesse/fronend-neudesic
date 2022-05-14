import React from 'react'
import { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
// import axios from 'axios'
import {toast } from 'react-toastify';
import {register} from '../actions/auth'
import Home from '../booking/Home'

const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e)=>{
    
    e.preventDefault()
    console.table({name,email,password})

    try {
      const res = await register({
        name,
        email,
        password
      })
      console.log("Register user ===> ", res)
      history.push("/login")
      toast.success("Register sucess. Please login")
      

    } catch (err) {
      console.error(err)
      if(err.response.status === 400) toast.error(err.response.data)
    }
  }

 
    
  

  return (
    <>
      <div className='container-fluid bg-secondary  p-0 text-center'>
        <h4s>Register</h4s>  
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
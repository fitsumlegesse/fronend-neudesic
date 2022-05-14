import React from 'react'
import { useState } from 'react'
import { login } from '../actions/auth'
// import { toast } from 'react-toastify'
import LoginForm from '../components/LoginForm'
// import {useDispatch} from 'react-redux'

const Login = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  



  const handleSubmit =async (e)=>{
    
    e.preventDefault()
    // console.log("Send Login Data ", {email, password})
    
    // console.log(res)
    try {
      let res = await login({email, password})
    
      

      if(res.data){
        
        console.log("response from: actions/auth:login(): ", res.data)          
        // Save user and token to local storage 
        window.localStorage.setItem("auth", JSON.stringify(res));
        //Save a user and token to redux 
        

        // redirect to homepage
          history.push("/home")

      }
         
      //
    } catch (error) {
      console.log("hitting false")
      // if(error.response.status === 400) toast.error(error.response.data)
    }
  }
  return (

    <>
      <div className='container-fluid h1 p-5 text-center'>
        <h1>Login</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm
              handleSubmit={handleSubmit}
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

export default Login
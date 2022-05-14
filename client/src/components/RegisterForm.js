import React from 'react'

const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword}) => {
  return (
  <form onSubmit={handleSubmit} className='mt-3'>
    <div className='form-group mb-2'>
      <label className='form-label'>Name</label>
      <input
        type="text"
        className='form-control'
        placeholder='Enter name '
        value={name}
        onChange={(e)=> setName(e.target.value)}
      >
      </input>
    </div>

    <div className='form-group mb-2'>
      <label className='form-label'>Email</label>
      <input
        type="email"
        className='form-control'
        placeholder='Enter email '
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      >
      </input>
    </div>

    <div className='form-group mb-2'>
      <label className='form-label'>Password</label>
      <input
        type="password"
        className='form-control'
        placeholder='Enter password '
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      >
      </input>
    </div>
    <button disabled={!name || !email || !password} className="btn btn-primary" >Submit </button> 
  </form>
  )
}

export default RegisterForm
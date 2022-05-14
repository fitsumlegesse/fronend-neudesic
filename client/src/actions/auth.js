import axios from 'axios'

export const register = async(user)=>
{
        await axios.post(`http://10.1.0.5:8000/api/register`, user)
}

export const login = async (user)=>
{
        // console.log("User retunred form backend",user)
        const res = await axios.post(`http://10.1.0.5:8000/api/login`, user)
        console.log("DIR:actions/auth.js : DATA RETURNED FROM SERVER AFTER SUCCESSFULL SIGNIN: ",res)
         return res

        
}
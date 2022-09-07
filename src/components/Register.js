import React,{useState,useEffect} from 'react'
import CustomerService from '../services/CustomerService';
import { useNavigate } from 'react-router-dom'
import AddAccount from './AddAccount';

const Register = () => {

    const [user, setUser] = useState({
        id:"",
        username:"",
        password:"",
        loggedIn:""
    })

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault(e);
            let res = CustomerService.saveUser(user).then((response)=>{
                navigate("/login")
              
            }).catch(err =>{
                //throw new Error(" User Already Exists")
                    alert("Username Already Exists")
                    
            })
            
    }

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user,[e.target.name]:value})
    }
    
  return (
    <div className='container mx-2 my-8'>
         <div className='flex  max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h2>Register New User</h2>
            </div>
            <form onSubmit={handleSubmit} >
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Username</label>
                <input type="text" name="username" value={user.username}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Password</label>
                <input type="password" name="password" value={user.password}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <p className='errs'></p>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button className='rounded items-center justify-center text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700' type='submit'>Register</button>
               {/* <button  className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700' type='submit'>Login</button> */}
            </div>
            </form>
            <div>Already register? Click here to login <button className='rounded bg-blue-500 text-white py-2 px-6 font-semibold hover:bg-blue-800' onClick={()=>navigate("/login")}>Log In</button></div>
            </div>
            </div>
    </div>
  )
}

export default Register
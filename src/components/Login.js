import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../services/CustomerService';

const Login = () => {
    const [user, setUser] = useState({
        username:"",
        password:"",
    })
    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user,[e.target.name]:value})
    }
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic aXNoaXRhMjE6aXNoaXRhQDEyMw==");
myHeaders.append("Cookie", "JSESSIONID=99533E4127682FBB7FD2E066CD981729");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:8090/citiapp/accounts", requestOptions)
  .then(response => response.text())
  .catch(error => console.log('error', error));

    const handleSubmit = (e) => {
        e.preventDefault(e);
            let res = CustomerService.login(user).then((response)=>{
                navigate("/customerList")
              
            }).catch(err =>{
                alert("Username Or Password is Incorrect")
                    
            })
    }

    const navigate = useNavigate();

  return (
    <div className='container mx-2 my-8'>
         <div className='flex  max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h2>Log In</h2>
            </div>
            <form onSubmit={handleSubmit}>
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

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button className='rounded items-center justify-center text-white font-semibold bg-blue-400 py-2 px-2 hover:bg-blue-700' type='submit'>LogIn</button>
              
            </div>
            </form>
            
            </div>
            </div>
    </div>
  )
}

export default Login
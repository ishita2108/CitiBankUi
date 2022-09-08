import React,{ useState, useEffect } from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import CustomerService from '../services/CustomerService';

const AddAccount = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [account, setAccount] = useState({
        accountNo: "",
        balance:""
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setAccount({...account,[e.target.name]:value})
    }
    
    const saveAccount=(e)=>{
    e.preventDefault();
    try{
    CustomerService.saveAccounts(state.id,account).then(
        window.location.reload(false))
    }catch(error){
        console.log(error)
    }}
   
    const reset = (e) =>{
        e.preventDefault();
        setAccount({
            accountNo: "",
            balance:""
        })
    }

  return (
    <div className='container mx-2 my-8'>
          <div className='h-12  mx-0'>
        <button onClick={()=> navigate("/customerList")}
        className='rounded bg-slate-600 text-white py-2 px-6 font-semibold'> Back</button>
        </div>
    <div className='flex  max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h2>Add New Account</h2>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Balance</label>
                <input type="text" name="balance" value={account.balance}
                    onChange={(e) => handleChange(e)}
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button onClick={saveAccount} className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700' type='submit'>Save</button>
               <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700' type='submit'>Clear</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddAccount
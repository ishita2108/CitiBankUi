import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../services/CustomerService';
//import Moment from 'moment';

const AddCustomer = () => {
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        id:"",
        name:"",
        permanentAddress:"",
        currentAddress:"",
        contactDetails:"",
        email:"",
        occupation:"",
        dob:"",
        panNo:"",
        aadharNo:"",
        passportNo:"",
        kycNo:""
    })
    //const [formErrors, setFormErrors] = useState({});

    const saveCustomer =(e) =>{
        e.preventDefault();
        CustomerService.saveCustomer(customer).then((response)=>{
            navigate("/customerList")
        }).catch((error)=>{
            console.log(error)
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        saveCustomer(e);
      
        //setFormErrors(validate(customer));
    }

    // const validate = (values) =>{
    //     const errors = {}
    //     const regex ="[A-Za-z]+( [A-Za-z]+)*"
    //     return errors;
    // }
       

    const handleChange =(e)=>{
        const value = e.target.value;
        setCustomer({...customer,[e.target.name]:value})
    };

    const reset = (e) =>{
        e.preventDefault();
        setCustomer({
            id:"",
            name:"",
            permanentAddress:"",
            currentAddress:"",
            contactDetails:"",
            email:"",
            occupation:"",
            dob:"",
            panNo:"",
            aadharNo:"",
            passportNo:"",
            kycNo:""
        });    
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
                <h2>Add New Customer</h2>
            </div>
        <form onSubmit={handleSubmit}>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Name</label>
                <input type="text" name="name" value={customer.name}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Permanent Address</label>
                <input type="text" name="permanentAddress"  value={customer.permanentAddress}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Current Address</label>
                <input type="text" name="currentAddress" value={customer.currentAddress}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Contact Details</label>
                <input type="text" name="contactDetails" value={customer.contactDetails}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Email</label>
                <input type="email" name="email" value={customer.email}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> DOB</label>
                <input type="date" format="yyyy-MM-dd" name="dob" value={customer.dob}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Pan Number</label>
                <input type="text" name="panNo" value={customer.panNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Aadhar Number</label>
                <input type="text" name="aadharNo" value={customer.aadharNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Passport Number</label>
                <input type="text" name="passportNo" value={customer.passportNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> KYC Number</label>
                <input type="text" name="kycNo" value={customer.kycNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Occupation</label>
                <input type="text" name="occupation" value={customer.occupation}
                    onChange={(e) => handleChange(e)}  required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700' type='submit'>Save</button>
               <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700' type='submit'>Clear</button>
            </div>
            </form>

        </div>
    </div>
    </div>
  )
}

export default AddCustomer
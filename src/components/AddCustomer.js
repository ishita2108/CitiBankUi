import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../services/CustomerService';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

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
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(customer)
            CustomerService.saveCustomer(customer).then((response)=>{
                navigate("/customerList")
            }).catch((error)=>{
                console.log(error)
            })
        }
    }, [formErrors])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(customer));
        setIsSubmit(true);
    }

    const validate = (values) =>{
        const errors = {}
        const nameValid =/^[a-zA-Z ]*$/
        const contactValid = /[789][0-9]{9}/
        const panValid = /[A-Z]{5}[0-9]{4}[A-Z]{1}/
        const aadharValid =/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/
        const passportValid = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/
        const kycValid = /[1-9][0-9]{13}/
        if(!nameValid.test(customer.name)){
            errors.name = "Add proper name"
        }

        if(!contactValid.test(customer.contactDetails)){
            errors.contactDetails = " Add proper Contact Number of 10 digits"
        }

        if(!panValid.test(customer.panNo)){
            errors.panNo = " Add proper Pan Number"
        }

        if(!aadharValid.test(customer.aadharNo)){
            errors.aadharNo = " Add proper Aadhar Number of 12 digits with spaces"
        }

        if(!passportValid.test(customer.passportNo)){
            errors.passportNo = " Add proper Passport Number"
        }

        if(!kycValid.test(customer.kycNo)){
            errors.kycNo = " Add proper KYC Number of 14  digits"
        }
        return errors;
    }
       

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
        <Button variant="contained" startIcon={<ArrowBackIcon />} color="primary"onClick={()=> navigate("/customerList")}> Back</Button>
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
            <p className='text-red-500'>{formErrors.name}</p>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Permanent Address</label>
                <input type="text" name="permanentAddress"  value={customer.permanentAddress}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <p className='text-red-500'>{formErrors.permanentAddress}</p>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Current Address</label>
                <input type="text" name="currentAddress" value={customer.currentAddress}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.currentAddress}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Contact Details</label>
                <input type="text" name="contactDetails" value={customer.contactDetails}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.contactDetails}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Email</label>
                <input type="email" name="email" value={customer.email}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <p className='text-red-500'>{formErrors.email}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> DOB</label>
                <input type="date" format="yyyy-MM-dd" name="dob" value={customer.dob}
                    onChange={(e) => handleChange(e)} required
                    className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.dob}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Pan Number</label>
                <input type="text" name="panNo" value={customer.panNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.panNo}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Aadhar Number</label>
                <input type="text" name="aadharNo" value={customer.aadharNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.aadharNo}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Passport Number</label>
                <input type="text" name="passportNo" value={customer.passportNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.passportNo}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> KYC Number</label>
                <input type="text" name="kycNo" value={customer.kycNo}
                    onChange={(e) => handleChange(e)} required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.kycNo}</p>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm  font-normal'> Occupation</label>
                <input type="text" name="occupation" value={customer.occupation}
                    onChange={(e) => handleChange(e)}  required
                   className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <p className='text-red-500'>{formErrors.occupation}</p>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <Button variant="contained" startIcon={<SaveAltIcon/>}color="success" type='submit'>Save</Button>
               <Button variant="contained" startIcon={<DeleteIcon />} onClick={reset} color="primary" type='submit'>Clear</Button>
            </div>
            </form>

        </div>
    </div>
    </div>
  )
}

export default AddCustomer
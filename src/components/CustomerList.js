import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import Customer from './Customer'

const CustomerList = () => {

    const navigate = useNavigate();

    const [customers, setCustomers] = useState(null);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async  () => {
        setLoading(true);
        try{
            const response = await CustomerService.getCustomers();
            setCustomers(response.data);
        }catch(error){
            console.log(error)
        }
        setLoading(false);
      };
      fetchData();
    }, [])
    


  return (
    <div className='container mx-2 my-8'>
    <div className='h-12'>
        <button onClick={()=> navigate("/addCustomer")}
        className='rounded bg-slate-600 text-white py-2 px-6 font-semibold'>Add Customer</button>
    </div>
    <div className='flex shadow border-b my-3'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-sm  text-gray-500 uppercase tracking-wider py-3 px-5'> Name</th>
                    <th className='text-left font-sm  text-gray-500 uppercase tracking-wider py-3 px-5'>Permannet Address</th>
                    <th className='text-left font-sm  text-gray-500 uppercase tracking-wider py-3 px-5'>Current Address</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Occupation</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>DOB</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Email</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Contact</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Pan</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Aadhar</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Passport</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>KYC</th>
                    <th className='text-left font-sm text-gray-500 uppercase tracking-wider py-3 px-5'>Action</th>
                </tr>
            </thead>
            {!loading && (
            <tbody className='bg-white'>
                {customers.map((customer)=>(
                    <Customer customer={customer} key={customer.id}/>
                ))}
            </tbody>)}
           
        </table>
    </div>
    </div>
  )
}

export default CustomerList
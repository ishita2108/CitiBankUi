import React from 'react'
import { useNavigate } from 'react-router-dom'
import ViewAccounts from './ViewAccounts';

const Customer = ({customer}) => {
    const navigate = useNavigate();
  return (
    
    <tr key={customer.id}>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.name}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.permanentAddress}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.currentAddress}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.occupation}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.dob}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.email}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.contactDetails}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.panNo}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.aadharNo}</div>
    </td>
    <td className='text-left px-1 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.passportNo}</div>
    </td>
    <td className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.kycNo}</div>
    </td>
    <td className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm px-2 py-2 text-white bg-blue-500 hover:bg-blue-900'>
            <button onClick={()=> navigate("/viewAccounts")}>
                View Accounts</button></div>
    </td>
    {/* <ViewAccounts customer={customer} id={customer.id}/> */}
    
</tr>
  )
}

export default Customer
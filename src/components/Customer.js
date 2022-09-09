import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const Customer = ({customer}) => {
    const navigate = useNavigate();
  return (
    <>
    <TableRow key={customer.id}>
    <TableCell  className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.name}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.permanentAddress}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.currentAddress}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.occupation}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.dob}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.email}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.contactDetails}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.panNo}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.aadharNo}</div>
    </TableCell>
    <TableCell className='text-left px-1 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.passportNo}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{customer.kycNo}</div>
    </TableCell>
    <TableCell className='text-left px-2 py-4 whitespace-nowrap'>
        <div>
            <Button color="success" variant="contained" startIcon={<VisibilityIcon/>} onClick={()=> navigate("/viewAccounts", {
        state: {
          "id": customer.id,
          "name":customer.name
        },
      })}>
                View Accounts</Button></div>
    </TableCell>
    
</TableRow>
</>
  )
}

export default Customer
import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Account = ({account}) => {
  return (
    <>
    <TableRow key={account.accountNo} >
    <TableCell className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{account.accountNo}</div>
    </TableCell>
    <TableCell className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{account.balance}</div>
    </TableCell>
   
    </TableRow>
    </>
  )
}

export default Account
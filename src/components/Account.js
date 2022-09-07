import React from 'react'

const Account = ({account}) => {
  return (
    <>
    <tr key={account.accountNo} >
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{account.accountNo}</div>
    </td>
    <td className='text-left px-3 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{account.balance}</div>
    </td>
   
    </tr>
    </>
  )
}

export default Account
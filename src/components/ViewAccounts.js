import React,{useEffect,  useState} from 'react'
import CustomerService from '../services/CustomerService'
import Account from './Account'
import { useLocation } from 'react-router-dom'
import AddAccount from './AddAccount'
import AggregateBalance from './AggregateBalance'

const ViewAccounts = () => {
  const { state } = useLocation();
    const [accounts, setAccounts] = useState(null);
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
      const fetchData = async  () => {
        setLoading(true);
        try{
            const response = await CustomerService.getAccounts(state.id);
            setAccounts(response.data);
        }catch(error){
            console.log(error)
        }
        setLoading(false);
      };
      fetchData();
      
    },[] )
  return (
    <div className='container mx-2 my-8'>
    <div className='h-12'>
        <h2 className=' text-center font-lg text-gray-800 uppercase tracking-wider py-3 px-5'>{state.name}</h2>
    </div>
    <div><AddAccount accounts={accounts} state={"id"}/></div>
    <div><AggregateBalance accounts={accounts} state={"id"}/></div>
    <div className='flex shadow border-b mx-2 my-3'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                <th className='text-left font-sm  text-gray-500 uppercase tracking-wider py-3 px-5'> Account Number</th>
                <th className='text-left font-sm  text-gray-500 uppercase tracking-wider py-3 px-5'>Balance</th>
                </tr>
                </thead>
                {!loading && (
            <tbody className='bg-white'>
                {accounts.map((account)=>(
                    <Account account={account} key={account.accountNo} />
                ))}
            </tbody>)}
                </table>
                </div>
    </div>
  )
}

export default ViewAccounts
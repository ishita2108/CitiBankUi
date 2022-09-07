import React, {useEffect, useState} from 'react'
import CustomerService from '../services/CustomerService'

const AggregateBalance = () => {

    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async  () => {
        setLoading(true);
        try{
            const response = await CustomerService.getBalance(68);
            setBalance(response.data);
        }catch(error){
            console.log(error)
        }
        setLoading(false);
      };
      fetchData();
    }, [])

  return (
    <div>
        <div className='flex  max-w-2xl mx-auto shadow border-b'>
    <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h2>Aggregated Balance</h2>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>{!loading &&(
        <h3>{balance}</h3>
    )}</div>
            </div>
    
    </div>
    </div>
  )
}

export default AggregateBalance
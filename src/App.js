
import './App.css';
import AddCustomer from './components/AddCustomer';
import Navbar from './components/Navbar';
import CustomerList from './components/CustomerList';
import ViewAccounts from './components/ViewAccounts';
import AddAccount from './components/AddAccount';
import AggregateBalance from './components/AggregateBalance';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route index element={<Login/>}></Route>
        <Route path="/customerList" element={<CustomerList/>}></Route>
        <Route path="/addCustomer" element={<AddCustomer />}></Route>
        <Route path="/viewAccounts" element={<ViewAccounts/>}></Route>
        <Route path="/addAccounts" element={<AddAccount/>}></Route>
        <Route path="/aggBalance" element={<AggregateBalance />}></Route>

  </Routes>
  </BrowserRouter>
  
  </>
  );
 
}

export default App;

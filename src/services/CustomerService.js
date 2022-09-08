import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8090/citiapp/customers";
const ACCOUNT_API_BASE_URL = "http://localhost:8090/citiapp/accounts/customer";
const ACCOUNT_API_AGG_URL = "http://localhost:8090/citiapp/accounts/customer/aggBalance";
const USER_API_BASE_URL = "http://localhost:8090/citiapp/users";

// const ACC_API = "http://localhost:8090/citiapp/accounts";

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic aXNoaXRhMjE6aXNoaXRhQDEyMw=='
// }

class CustomerService{

    saveCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);
    };

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    getAccounts(cid){
        return axios.get(ACCOUNT_API_BASE_URL+"/"+cid)
    }

    saveAccounts(cid,account){
        return axios.post(ACCOUNT_API_BASE_URL+"/"+cid, account)
    }

    getBalance(cid){
        return axios.get(ACCOUNT_API_AGG_URL+"/"+cid)
    }

    saveUser(user){
        return axios.post(USER_API_BASE_URL+"/register",user)
    }
    login(user){
        return axios.post(USER_API_BASE_URL+"/login",user)
    }

    // login(user){
    //     return axios.post(ACC_API, user,{headers:headers})
    // }

}

export default new CustomerService();
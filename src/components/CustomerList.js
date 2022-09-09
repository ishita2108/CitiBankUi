import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Customer from "./Customer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { Padding } from "@mui/icons-material";

const CustomerList = () => {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomers();
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
    <CssBaseline />

        <div className="py-5 mx-2">
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => navigate("/addCustomer")}
        >
          Add Customer
        </Button>
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Current Address</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Pan</TableCell>
            <TableCell>Aadhar</TableCell>
            <TableCell>Passport</TableCell>
            <TableCell>KYC</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {!loading && (
        <TableBody>{customers.map((customer)=>(
          <Customer customer={customer} key={customer.id} />
      ))}</TableBody>)}
        </Table>
        </TableContainer>

    </>
  );
};

export default CustomerList;

import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import Account from "./Account";
import { useLocation, useNavigate} from "react-router-dom";
import AddAccount from "./AddAccount";
import AggregateBalance from "./AggregateBalance";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ViewAccounts = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getAccounts(state.id);
        setAccounts(response.data);
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
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#eeeeee",
            height: "10vh",
            width: "8vw, border: '1px dashed grey'",
            padding: "4px",
            marginTop: "3px",
          }}
        >
          <Grid container spacing={2}>
          <Grid item xs={5}>
          <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/customerList")}>
          Back
        </Button>
          </Grid>
          <Grid item xs={7}>
          <Typography sx={{ fontSize: 20 }} color="#000000" gutterBottom>
              {state.name}
            </Typography>
          </Grid>
        </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <AddAccount>xs=4</AddAccount>
          <AggregateBalance>xs=8</AggregateBalance>
          </Grid>
          <Grid item xs={8}>
          <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 7000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Account Number </TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        {!loading && (
        <TableBody>{accounts.map((account)=>(
          <Account account={account} key={account.accountNo} />
      ))}</TableBody>)}
        </Table>
        </TableContainer>
        </Grid>
        {/* <Grid item xs={5}>
        <Card variant="outlined" sx={{ minHeight: 150 }}>
        <CardContent>
            <Typography>
              {state.p}
            </Typography>
            <Typography>{state.name}</Typography>
          </CardContent>
          </Card>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default ViewAccounts;

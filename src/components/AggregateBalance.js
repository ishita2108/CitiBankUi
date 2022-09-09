import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AggregateBalance = () => {
  const { state } = useLocation();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getBalance(state.id);
        setBalance(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="my-3"></div>
    <Box sx={{ maxWidth: 400 }} mx={5}>
      <Card variant="outlined" sx={{ minHeight: 150 }}>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 28 }}
              color="text.secondary"
              gutterBottom
            >
              Aggregated Balance
            </Typography>
            <Typography>{!loading && <h3>{balance}</h3>}</Typography>
          </CardContent>
        </Grid>
      </Card>
    </Box>
    </>
  );
};

export default AggregateBalance;

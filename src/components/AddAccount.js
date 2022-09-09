import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useNavigate, useLocation } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import AggregateBalance from "./AggregateBalance";

const AddAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [account, setAccount] = useState({
    accountNo: "",
    balance: "",
  });

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      CustomerService.saveAccounts(state.id, account)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const value = e.target.value;
    setAccount({ ...account, [e.target.name]: value });
  };
  const validate = (values) => {
    const errors = {};
    if (isNaN(values.balance)) {
      errors.balance = "Add proper Amount";
    }
    return errors;
  };

  const saveAccount = (e) => {
    e.preventDefault();
    setFormErrors(validate(account));
    setIsSubmit(true);
  };

  const reset = (e) => {
    e.preventDefault();
    setAccount({
      accountNo: "",
      balance: "",
    });
  };

  return (
    <>
      <div className="my-3">
       
      </div>
      <Box sx={{ maxWidth: 400 }} mx={5}>
        <Card variant="outlined" sx={{ minHeight: 250 }}>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <form onSubmit={saveAccount}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 28 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Add Account
                </Typography>
                <TextField
                  required
                  id="filled-required"
                  label="Add Amount"
                  variant="filled"
                  name="balance"
                  value={account.balance}
                  onChange={(e) => handleChange(e)}
                />
                <Typography sx={{ fontSize: 14 }} color="error" gutterBottom>
                  {formErrors.balance}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveAltIcon />}
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  onClick={reset}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  type="submit">
                  Clear
                </Button>
              </CardActions>
            </form>
          </Grid>
        </Card>
      </Box>   
        
    </>
  );
};

export default AddAccount;

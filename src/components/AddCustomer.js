import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    permanentAddress: "",
    currentAddress: "",
    contactDetails: "",
    email: "",
    occupation: "",
    dob: "",
    panNo: "",
    aadharNo: "",
    passportNo: "",
    kycNo: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(customer));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const nameValid = /^[a-zA-Z ]*$/;
    const contactValid = /[789][0-9]{9}/;
    const panValid = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    const aadharValid = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    const passportValid = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
    const kycValid = /[1-9][0-9]{13}/;
    if (!nameValid.test(customer.name)) {
      errors.name = "Add proper name";
    }

    if (!contactValid.test(customer.contactDetails)) {
      errors.contactDetails = " Add proper Contact Number of 10 digits";
    } else if (values.contactDetails.length !== 10) {
      errors.contactDetails = "Phone Number Can not have more than 10 digits";
    }

    if (!panValid.test(customer.panNo)) {
      errors.panNo = " Add proper Pan Number";
    }

    if (!aadharValid.test(customer.aadharNo)) {
      errors.aadharNo = " Add proper Aadhar Number of 12 digits with spaces";
    }

    if (!passportValid.test(customer.passportNo)) {
      errors.passportNo = " Add proper Passport Number";
    }

    if (!kycValid.test(customer.kycNo)) {
      errors.kycNo = " Add proper KYC Number of 14  digits";
    } else if (values.kycNo.length > 14) {
      errors.kycNo = " Add proper KYC Number of 14  digits";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(customer);
      CustomerService.saveCustomer(customer)
        .then((response) => {
          navigate("/customerList");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setCustomer({
      id: "",
      name: "",
      permanentAddress: "",
      currentAddress: "",
      contactDetails: "",
      email: "",
      occupation: "",
      dob: "",
      panNo: "",
      aadharNo: "",
      passportNo: "",
      kycNo: "",
    });
  };

  return (
    <>
      <div className="h-12  mx-4 my-4">
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          color="primary"
          onClick={() => navigate("/customerList")}
        >
          {" "}
          Back
        </Button>
      </div>
      <Box sx={{ minWidth: 800 }} mx={5}>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Add Customer
          </Typography>
        </Grid>
        <Card variant="outlined" sx={{ minHeight: 250 }}>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Enter Name"
                      variant="filled"
                      name="name"
                      value={customer.name}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Permanent Address"
                      variant="filled"
                      name="permanentAddress"
                      value={customer.permanentAddress}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.permanentAddress}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Current Address"
                      variant="filled"
                      name="currentAddress"
                      value={customer.currentAddress}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.currentAddress}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Contact Details"
                      variant="filled"
                      name="contactDetails"
                      value={customer.contactDetails}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.contactDetails}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Email"
                      variant="filled"
                      name="email"
                      value={customer.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="items-center justify-center h-14 w-full my-4">
                      <label className="block text-gray-600 text-sm  font-normal">
                        DOB
                      </label>
                      <input
                        type="date"
                        format="yyyy-MM-dd"
                        name="dob"
                        value={customer.dob}
                        onChange={(e) => handleChange(e)}
                        required
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>

                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.dob}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Pan Number"
                      variant="filled"
                      name="panNo"
                      value={customer.panNo}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.panNo}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Aadhar Number"
                      variant="filled"
                      name="aadharNo"
                      value={customer.aadharNo}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.aadharNo}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Passport Number"
                      variant="filled"
                      name="passportNo"
                      value={customer.passportNo}
                      onChange={(e) => handleChange(e)}
                    />

                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.passportNo}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="KYC Number"
                      variant="filled"
                      name="kycNo"
                      value={customer.kycNo}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.kycNo}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      id="filled-required"
                      label="Occupation"
                      variant="filled"
                      name="occupation"
                      value={customer.occupation}
                      onChange={(e) => handleChange(e)}
                    />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="error"
                      gutterBottom
                    >
                      {formErrors.occupation}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
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
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={reset}
                color="primary"
                type="submit"
              >
                Clear
              </Button>
            </CardActions>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default AddCustomer;

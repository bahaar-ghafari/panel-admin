import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/actions";
import {
  Button,
  TextField,
  InputAdornment,
  Grid,
  Box
} from "@material-ui/core";
import NameIcon from "@material-ui/icons/SupervisorAccount";
// import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import { useStyles } from "./GenericForm.style";

export const GenericForm = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    // const name = this.getName.value;
    // const email = this.getEmail.value;
    const data = {
      userId: new Date(),
      name,
      username,
      email,
      phone,
      street,
      suit,
      city,
      zipcode,
      lat,
      lng
      // editing: false
    };
    dispatch(addUser(data));
    // this.getName.value = "";
    // this.getUsername.value = "";
  };

  const {
    values: {
      name,
      username,
      email,
      phone,
      street,
      suit,
      city,
      zipcode,
      lat,
      lng /*, password, confirmPassword */
    },
    errors,
    touched,
    // handleSubmit,
    handleChange
    // isValid
  } = props;
  // console.table(props);
  return (
    <form onSubmit={handleSubmit}>
      <Grid item xs={6} className={classes.field}>
        <Box pl={1} pt={3}>
          <TextField
            name="name"
            helperText={touched.name ? errors.name : ""}
            error={Boolean(errors.name)}
            label="Name"
            value={name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NameIcon />
                </InputAdornment>
              )
            }}
          />
          <div>{Boolean(errors.name) ? errors.name : ""}</div>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.field}>
        <Box pl={1} pt={3}>
          <TextField
            name="username"
            helperText={touched.username ? errors.username : ""}
            error={Boolean(errors.username)}
            label="Username"
            value={username}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NameIcon />
                </InputAdornment>
              )
            }}
          />
          <div>{Boolean(errors.username) ? errors.username : ""}</div>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.field}>
        <Box pl={1} pt={3}>
          <TextField
            name="email"
            helperText={touched.email ? errors.email : ""}
            error={Boolean(errors.email)}
            label="Email"
            value={email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />
          <div>{Boolean(errors.email) ? errors.email : ""}</div>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.field}>
        <Box pl={1} pt={3}>
          <TextField
            name="phone"
            helperText={touched.phone ? errors.phone : ""}
            error={Boolean(errors.phone)}
            label="Phone"
            value={phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NameIcon />
                </InputAdornment>
              )
            }}
          />
          <div>{Boolean(errors.phone) ? errors.phone : ""}</div>
        </Box>
      </Grid>
      <div className="address">
        {/* <div>address:</div> */}
        <Grid item xs={6} className={classes.field}>
          <Box pl={1} pt={3}>
            <TextField
              name="street"
              helperText={touched.street ? errors.street : ""}
              error={Boolean(errors.street)}
              label="Street"
              value={street}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NameIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{Boolean(errors.street) ? errors.street : ""}</div>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.field}>
          <Box pl={1} pt={3}>
            <TextField
              name="city"
              helperText={touched.city ? errors.city : ""}
              error={Boolean(errors.city)}
              label="City"
              value={city}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NameIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{Boolean(errors.city) ? errors.city : ""}</div>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.field}>
          <Box pl={1} pt={3}>
            <TextField
              name="zipcode"
              helperText={touched.zipcode ? errors.zipcode : ""}
              error={Boolean(errors.zipcode)}
              label="Zipcode"
              value={zipcode}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NameIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{Boolean(errors.zipcode) ? errors.zipcode : ""}</div>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.field}>
          <Box pl={10} pt={0}>
            <Grid item xs={3} className={classes.field}>
              <Box pl={1} pt={3}>
                <TextField
                  name="lat"
                  helperText={touched.lat ? errors.lat : ""}
                  error={Boolean(errors.lat)}
                  label="lat"
                  value={lat}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NameIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <div>{Boolean(errors.lat) ? errors.lat : ""}</div>
              </Box>
            </Grid>
            <Grid item xs={3} className={classes.field}>
              <Box pl={1} pt={3}>
                <TextField
                  name="lng"
                  helperText={touched.lng ? errors.lng : ""}
                  error={Boolean(errors.lng)}
                  label="lng"
                  value={lng}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NameIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <div>{Boolean(errors.lng) ? errors.lng : ""}</div>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </div>
      {/* <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={Boolean(errors.password)}
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{errors.password}</div>
      <TextField
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={Boolean(errors.confirmPassword)}
        label="Confirm Password"
        fullWidth
        type="password"
        value={confirmPassword}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <div>{errors.confirmPassword}</div> */}
      <Grid item xs={12}>
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="text"
          // color="primary"
          // disabled={!isValid}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

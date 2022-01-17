import React , {useState,useEffect} from 'react'
import Grid  from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/system"
import Button from "react-bootstrap/Button"
import UseForm from "./UseForm"
import Input from "./formControls/Input"
import DateTimePicker from "./formControls/DateTimePicker"

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#CD9F71",
  //backgroundImage: `url("https://picsum.photos/200/300")`,
  outline: "red solid 3px",
  backgroundColor: "#270D01",
  margin: theme.spacing(1),
  width: "80%",
  ".MuiButton-root": { color: "#FF0000" },
}))

function formatTodayDate() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear(),
    hours = d.getHours(),
    minutes = d.getMinutes()
    
  if (month.length < 2) month = "0" + month
  if (day.length < 2) day = "0" + day
  if (hours.length < 2) hours = "0" + hours
  

  return [year, month, day].join("-") + `T${hours}:${minutes}`
}

const initialFieldValues = {
  id: 0,
  fullName: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  city: "",
  selectedDate: "",
  selectedTime: "",
  selectedDateTime: formatTodayDate(),
  bookingDate: new Date(),
  cancellationStatus: false,
}
const BookingForm = () => {
  // const [values, setValues] = useState(initialFieldValues)
  const { values, setValues, handleInputChange } = UseForm(initialFieldValues)
  
  return (
    <form className="booking-apt-form" autoComplete="off">
      <Grid container>
        <Grid item xs={12}>
          <h2 className="booking-form-header">From An Artist to An Artist</h2>
          <Input
            variant="outlined"
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
            // error={errors.fullName}
          ></Input>
          <Input
            variant="outlined"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            // error={errors.fullName}
          ></Input>
          <Input
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            // error={errors.fullName}
          ></Input>
          <Input
            variant="outlined"
            label="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInputChange}
            // error={errors.fullName}
          ></Input>
          <DateTimePicker
            label="Appointment"
            name="selectedDateTime"
            value={values.selectedDateTime}
            onChange={handleInputChange}
            minutesStep={15}
          ></DateTimePicker>
        </Grid>
        <Button style={{margin:"auto",width:"auto"}}>Submit</Button>
      </Grid>
    </form>
  )
}

export default BookingForm

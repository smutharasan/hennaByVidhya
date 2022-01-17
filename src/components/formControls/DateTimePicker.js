import React from "react"
import TextField from "@mui/material/TextField"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DateAdapter from "@mui/lab/AdapterMoment"
import { styled } from "@mui/system"

const StyledDatePicker = styled(TextField)(({ theme }) => ({
  color: "#CD9F71",
  
  //backgroundImage: `url("https://picsum.photos/200/300")`, #DBB47B #CD9F71
  margin: theme.spacing(2.25),
  width:"100%",
  marginInline:"auto",
  ".MuiButton-root": { color: "#FF0000" },
  "& .MuiOutlinedInput-root": {
    
    backgroundColor: "#270D01",
  },
  "& label.Mui-focused": {
    color: "#f1e4cf",
  },
  "& label": {
    color: "#BE8F60",
    fontSize: "1rem",
  },
  "& .MuiOutlinedInput-root": {
    
    backgroundColor: "#270D01",
    "& fieldset": {
      borderColor: "#be8f60",
      // borderWidth: "3px",
    },
    "& input": { color: "#be8f60", fontSize: "1.25rem" },
    "& input::-webkit-calendar-picker-indicator": {
       filter: "invert(66%) sepia(28%) saturate(636%) hue-rotate(349deg) brightness(85%) contrast(85%)"
    },
    "&:hover fieldset": {
      borderColor: "#f1e4cf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f1e4cf",
    },
  },
}))

const DateTimePicker = props => {
  const { name, label, value, onChange } = props
   
  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    }
  })

  const dateTimeInputProps = {
    step: 15,
  }

  // return <TextField id="time" type="time" inputProps={inputProps} />
  
//   function formatDate(date) {
//     var d = new Date(date),
//       month = "" + (d.getMonth() + 1),
//       day = "" + d.getDate(),
//       year = d.getFullYear(),
//       hours = d.getHours(),
//       minutes = d.getMinutes()

//     if (month.length < 2) month = "0" + month
//     if (day.length < 2) day = "0" + day
//     if (hours.length < 2) hours = "0" + hours

//     return [year, month, day].join("-") + `T${hours}:${minutes}`
//   }

//   function formatTodayDate() {
//     var d = new Date(),
//       month = "" + (d.getMonth() + 1),
//       day = "" + d.getDate(),
//       year = d.getFullYear(),
//       hours = d.getHours(),
//       minutes = d.getMinutes()
      
//     if (month.length < 2) month = "0" + month
//     if (day.length < 2) day = "0" + day
//     if (hours.length < 2) hours = "0" + hours
    

//     return [year, month, day].join("-") + `T${hours}:${minutes}`
//   }

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <StyledDatePicker
        id="datetime-local"
        label={label}
        name={name}
        value={value}
        onChange={dateTime =>
          onChange(convertToDefaultEventPara(name, dateTime.target.value))
        }
        type="datetime-local"
        // defaultValue={formatTodayDate()}

        InputLabelProps={{
          shrink: true,
        }}
        inputProps={dateTimeInputProps}
      />
    </LocalizationProvider>
  )
}

export default DateTimePicker

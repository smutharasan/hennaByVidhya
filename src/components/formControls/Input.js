import React from 'react'
import TextField from "@mui/material/TextField"
import { styled } from "@mui/system"

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#CD9F71",
  //backgroundImage: `url("https://picsum.photos/200/300")`, #DBB47B #CD9F71
  margin: theme.spacing(2),
  width: "100%",
  marginInline: "auto",
  ".MuiButton-root": { color: "#FF0000" },
  "& .MuiOutlinedInput-root": {
    outline: "#000000 solid 3px",
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
      borderWidth: "1px",
    },
    "& input": { color: "#be8f60", fontSize: "1.25rem" },
    "&:hover fieldset": {
      borderColor: "#f1e4cf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f1e4cf",
    },
  },
}))

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
})

const Input = (props) => {
    const { name, label, value, onChange } = props
   
    return (
      <StyledTextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        // error={errors.fullName}
      ></StyledTextField>
    )
}

export default Input

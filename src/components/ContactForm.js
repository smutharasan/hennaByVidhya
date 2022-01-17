import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "react-bootstrap/Button"
import { styled } from "@mui/system"

const StyledTextAreaField = styled(TextField)(({ theme }) => ({
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
    "& input": { color: "#be8f60", fontSize: "1.25rem" , height:"25vh"},
    "&:hover fieldset": {
      borderColor: "#f1e4cf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f1e4cf",
    },
  },
}))
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
    "& textArea": { color: "#be8f60", fontSize: "1.25rem" },
    "&:hover fieldset": {
      borderColor: "#f1e4cf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f1e4cf",
    },
  },
}))

const ContactForm = () => {
    return (
      <form className="contact-form">
        <StyledTextField label="Full Name" fullWidth autocomplete="none" />
        <StyledTextField label="Email" fullWidth autocomplete="none" />
        <StyledTextField
          label="Message"
          fullWidth
          autocomplete="none"
          multiline
          rows={5}
          maxRows={8}
          secondaryColor="#000"
        />
        <Button
          style={{
            marginInline: "auto",
            width: "auto",
            display: "block",
            marginBlock: "1rem",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    )
}

export default ContactForm

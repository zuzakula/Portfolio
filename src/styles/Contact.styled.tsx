import { pink } from "@mui/material/colors";

const styledContact = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    height: "80vh",
  },
  input: {
    display: "block",
    width: "80%",
    padding: "1em",
    marginBottom: "2em",
    borderRadius: "5px",
    border: 0,
    fontSize: "20px",
  },
  submitButton: {
    display: "inline-block",
    width: "30%",
    height: "2rem",
    border: 0,
    bottom: 0,
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "10px",
    backgroundColor: pink["100"],
  },
  contactContainer: {
    margin: "0 0",
  },
};

export default styledContact;

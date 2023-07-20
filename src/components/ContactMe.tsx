import style from "../styles/shared-styles";
import styledContact from "../styles/Contact.styled";
import { Container } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_munyh6u",
        "template_2mou541",
        form.current,
        "QIrdxxyOlGbwCE-nQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection4" style={style.header}>
          CONTACT ME
        </h1>
        <div style={styledContact.contactContainer}>
          <div style={style.text}>
            <form ref={form} onSubmit={sendEmail} style={styledContact.form}>
              <input
                type="text"
                placeholder="Full Name"
                name="userName"
                style={styledContact.input}
                required
              />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                style={styledContact.input}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                style={styledContact.input}
                required
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                style={styledContact.input}
              ></textarea>
              <input
                type="submit"
                value="SEND"
                style={styledContact.submitButton}
              />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactMe;

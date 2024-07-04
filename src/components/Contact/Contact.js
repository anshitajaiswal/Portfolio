import * as React from "react";
import Button from "../button/Button";
import { ContactStyles } from "./ContactStyles";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ContactForm = styled.form`
  width: 100%; /* Ensure form takes full width */
  max-width: 750px; /* Adjust as needed */
`;

const Contact = ({ theme, toggleTheme }) => {
  const [backgroundColor, setBackgroundColor] = useState(theme === "dark" ? "#000000" : "#444");
  const [Color2, setColor2] = useState(theme === "dark" ? "808080" : "#888");

  useEffect(() => {
    setBackgroundColor(theme === "dark" ? "#000000" : "#e9e9e9");
    setColor2(theme === "dark" ? "#808080" : "#888");
  }, [theme]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwpekopy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        alert('Thanks for your message!');
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit} name="contact">
      <ContactStyles className="section">
        <input
          style={{ backgroundColor: backgroundColor, color: Color2 }}
          placeholder="Your name..."
          type="text"
          name="name"
          required
        />
        <input
          style={{ backgroundColor: backgroundColor, color: Color2 }}
          placeholder="Your email..."
          type="email"
          name="email"
          required
        />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
          style={{ backgroundColor: backgroundColor, color: Color2 }}
          required
        ></textarea>
        <Button type="submit">Send</Button>
      </ContactStyles>
    </ContactForm>
  );
};

export default Contact;

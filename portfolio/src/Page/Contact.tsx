import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const sizes = {
  desktop: "1024px", // Standard breakpoint for larger screens
  tablet: "768px", // Common tablet breakpoint (e.g., iPads)
  mobile: "480px", // Suitable for small phones
};

const media = {
  desktop: `(max-width: ${sizes.desktop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID, // Access environment variables correctly
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <ContactWrapper>
      <Main>
        <FormSection>
          <h1>SAY HELLO!</h1>
          <p>
            My creative spirit comes alive in the digital realm. With nimble
            fingers flying across the keyboard.
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <label>
              <input type="text" name="user_name" placeholder="Name" required />
            </label>
            <label>
              <input
                type="email"
                name="user_email"
                placeholder="E-Mail"
                required
              />
            </label>
            <label>
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </label>
            <button type="submit">SEND EMAIL</button>
          </form>
        </FormSection>
        <ImageSection>
          <img
            src="/Anotherme.jpg"
            alt="Nature scene with a woman leaning on a tree"
          />
        </ImageSection>
      </Main>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  color: #000;
  display: flex;
  height: 100vh;
  z-index: 1;
  background-color: white;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  border-bottom: 1px solid gray;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.section`
  display: flex;
  height: 90%;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #555;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 60%;

    gap: 10px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;

      input,
      textarea {
        margin-top: 0.5rem;
        padding: 2rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #f9f9f9;
      }

      textarea {
        resize: none;
        font-family: "Poppins", sans-serif;
        height: 180px;
      }
    }

    button {
      background-color: #000;
      color: #fff;
      border: none;
      padding: 2rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #333;
      }
    }
  }

  @media ${media.tablet} {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    form {
      label {
        input,
        textarea {
          padding: 1rem;
          font-size: 0.8rem;
        }
      }

      button {
        padding: 1rem 1rem;
        font-size: 0.8rem;
      }
    }
  }

  @media ${media.mobile} {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    form {
      label {
        input,
        textarea {
          padding: 1rem;
          font-size: 0.8rem;
        }
      }

      button {
        padding: 1rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
`;

const ImageSection = styled.section`
  display: flex;
  height: 90%;
  width: 70%;
  justify-content: center;
  align-items: center;

  img {
    height: 90%;
    width: 70%;
    border-radius: 10px;
  }

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.mobile} {
    display: none;
  }
`;

export default Contact;

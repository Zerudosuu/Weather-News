import styled from "styled-components";

function Contact() {
  return (
    <ContactWrapper>
      <Main>
        <FormSection>
          <h1>SAY HELLO!</h1>
          <p>
            My creative spirit comes alive in the digital realm. With nimble
            fingers flying across the keyboard.
          </p>
          <form>
            <label>
              <input type="text" placeholder="Name" />
            </label>
            <label>
              <input type="email" placeholder="E-Mail" />
            </label>
            <label>
              <textarea placeholder="Message"></textarea>
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
`;

export default Contact;

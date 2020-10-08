import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillApple } from 'react-icons/ai';

const Overlay = styled.div`
  background: rgba(34, 34, 34, 0.65);
  width: 100%;
  height: 100%;
  z-index: 600;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Modal = styled.div`
  width: 300px;
  padding: 20px;
  z-index: 3;
  margin: 70px auto;
  background-color: white;

  h1 {
    font-size: 20px;
    margin: 0 0 6px 0;
  }

  p {
    font-size: 14px;
    margin: 0 0 16px 0;
  }

  form > input {
    border: 1px solid rgba(34, 34, 34, 0.2);
    width: 100%;
    padding: 10px 4px 10px 12px;
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;
    border-shadow: 0 1px 12px 0 rgba(34, 34, 34, 0.2);
    margin: 6px 0;
  }

  form > input:hover {
    border: 1px solid black;
  }

  form > input:focus {
    border-color: pink;
  }


  .sd_troubleSigningIn {
    text-align: center;
    font-size: 12px;
  }

  .sd_troubleSigningIn > a {
    color: #595959;
  }

  .sd_troubleSigningIn > a:visited {
    color: #595959;
  }

`;

const ExitButton = styled.button`
  position: absolute;
  left: 730px;
  top: 10px;
  color: white;
  border: none;
  background-color: rgba(34,34,34,0);
  font-size: 24px;
  padding: 15px;
  border-radius: 50%;
  width: 55px;
  height: 55px;

  &:hover {
    cursor: pointer;
    background-color: rgba(34,34,34,0.65);
  }
`;

const Or = styled.div`
  display: flex;

  hr {
    width: 100%;
  }

  span {
    padding: 0 15px;
    letter-spacing: 1px;
    font-size: 14px;
  }
`;

const ThirdPartyButton = styled.button`
  width: 100%;
  margin: 8px 0;
  background: white;
  padding: 10px;
  border-radius: 30px;
  font-size: 16px;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  .sd_thirdPartyIcon {
    position: relative;
    top: 3px;
  }
`;

const ContinueButton = styled(ThirdPartyButton)`
  background: black;
  color: white;
`;

const TermsAndService = styled.p`
  color: #595959;
  letter-spacing: 1px;
  text-align: justify;
  line-spacing: 2px;
  line-height: 20px;
`;

const SignInModal = ({ toggleModal }) => {
  const useOutsideModal = (ref) => {
    useEffect(() => {
      // toggle modal if clicked outside of element
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          toggleModal();
        }
      };

      // bind  the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideModal(wrapperRef);
  return (
    <Overlay>
      <Modal ref={wrapperRef}>
        <ExitButton type="button" onClick={toggleModal}>X</ExitButton>
        <h1>Sign in to continue</h1>
        <p>Sign in or register with your email address</p>

        <form>
          <label>Email address</label>
          <br />
          <input type="text" />
          <br />
          <ContinueButton type="submit">Continue</ContinueButton>
        </form>

        <p className="sd_troubleSigningIn">
          <a href="#">Trouble signing in?</a>
        </p>

        <Or>
          <hr />
          <span>OR</span>
          <hr />
        </Or>

        <ThirdPartyButton>
          <FcGoogle className="sd_thirdPartyIcon" />
          &nbsp; Continue with Google
        </ThirdPartyButton>
        <ThirdPartyButton>
          <AiFillFacebook className="sd_thirdPartyIcon" />
          &nbsp; Continue with Facebook
        </ThirdPartyButton>
        <ThirdPartyButton>
          <AiFillApple className="sd_thirdPartyIcon" />
          &nbsp; Continue with Apple
        </ThirdPartyButton>

        <TermsAndService>
          Netus et malesuada fames ac turpis. Turpis egestas pretium aenean pharetra magna ac.
          Nisl condimentum id venenatis a condimentum vitae.
          Imperdiet proin fermentum leo vel orci porta non pulvinar.
        </TermsAndService>
      </Modal>
    </Overlay>
  );
};

export default SignInModal;

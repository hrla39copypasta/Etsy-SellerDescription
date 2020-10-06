import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { RiLockFill } from 'react-icons/ri';
import paypal from '../../../paypal.jpeg';
import mastercard from '../../../mastercard.jpg';
import visa from '../../../visa.jpg';
import discover from '../../../discover.jpg';
import greenGiftCard from '../../../greengiftcard.jpg';

const Overlay = styled.div`
  background: rgba(34, 34, 34, 0.65);
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Modal = styled.div`
  width: 360px;
  padding: 10px 30px;
  z-index: 3;
  margin: 70px auto;
  background-color: white;
  border-radius: 20px;

  button {
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
  }

  button:hover {
    cursor: pointer;
    background-color: rgba(34,34,34,0.65);
  }

  p {
    color: #595959;
    letter-spacing: 1px;
  }

`;

const Section = styled.div`
  margin: 18px auto;

  p {
    margin: 0;
  }
  h3 {
    margin: 0 0 6px 0;
  }
`;

const Payments = styled.div`
  p {
    color: black;
  }

  img {
    width: 50px;
    margin: 3px;
    border: 1px solid #EEEEEE;
  }

  .sd_payment > span {
    padding: 4px;
    font-size: 16px;
    position: relative;
    top: 2px;
  }
`;

const PolicyModal = ({ toggleModal, storeName }) => {
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
        <button type="button" onClick={toggleModal}>X</button>
        {/* TODO: update store name to be dynamic */}
        <h2>
          Shop policies for&nbsp;
          { storeName }
        </h2>
        <p>Last updated on May 17, 2020</p>

        <h3>Returns & exchanges</h3>

        <Section>
          <h3>Urna neque viverra justo nec</h3>
          <p>Magna fermentum iaculis: 14 diam phasellus </p>
          <p>Donec ac odio tempor: 30 diam phasellus </p>
        </Section>
        <Section>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </Section>
        <Section>
          <h3>Laoreet id donec ultrices tincidunt arcu non sodales</h3>
          <p>
            UUt etiam sit amet nisl purus in mollis. Amet consectetur adipiscing
            elit ut aliquam. Id aliquet lectus proin nibh.
          </p>
          <ul>
            <li>Blandit libero volutpat </li>
            <li>Sit amet nisl suscipit</li>
            <li>Mi tempus imperdiet nulla</li>
            <li>Elit scelerisque mauris</li>
          </ul>
        </Section>
        <Section>
          <h3>Magna fermentum iaculis</h3>
          <p>
            At tempor commodo ullamcorper a lacus vestibulum sed arcu.
            Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
          </p>
        </Section>

        <Payments>
          <h3>Payments</h3>
          <p className="sd_payment">
            <span><RiLockFill /></span>
            Secure options
          </p>

          <div>
            <img src={paypal} alt="paypal" />
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={discover} alt="discover" />
            <img src={greenGiftCard} alt="green gift card" />
          </div>
          <p>Id volutpat lacus laoreet non curabitur</p>
          <p>
            Getsy viverra adipiscing at in tellus integer.
            Venenatis cras sed felis eget velit aliquet sagittis
          </p>
        </Payments>

      </Modal>
    </Overlay>
  );
};

export default PolicyModal;

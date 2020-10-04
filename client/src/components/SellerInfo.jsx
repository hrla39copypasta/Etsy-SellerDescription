import React, { Component } from 'react';
import styled from 'styled-components';
import SignInModal from './SignInModal.jsx';

const Seller = styled.div`
  display: flex;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .sd_sellerName {
    font-size: 16px;
  }

  .sd_ownerText {
    color: #595959;
  }

  .sd_ownerText > a {
    color: #595959;
  }

  .sd_ownerText > a:hover {
    opacity: 0.5;
  }


`;

const MessageButton = styled.button`
  width: 100%;
  margin: 10px 0;
  background: white;
  padding: 10px;
  border-radius: 30px;
  font-size: 16px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const SellerResponse = styled.p`
  text-align: center;
  color: 595959;
`;

export default class SellerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { messageModal } = this.state;
    this.setState({
      messageModal: !messageModal,
    });
  }

  render() {
    const { messageModal } = this.state;
    return (
      <div>
        <p>Meet your seller</p>
        <Seller>
          <img src="https://picsum.photos/200" alt="seller" />
          <div>
            <p className="sd_sellerName">Luke Emery</p>
            <p className="sd_ownerText">
              Owner of&nbsp;
              <a href="#">Vanwoof</a>
            </p>
          </div>
        </Seller>

        <MessageButton onClick={this.toggleModal} type="button">Message Luke Emery</MessageButton>
        {
          messageModal
            ? <SignInModal toggleModal={this.toggleModal} />
            : null
        }
        <SellerResponse>
          This seller usually responds&nbsp;
          <strong>within 24 hours.</strong>
        </SellerResponse>
      </div>
    );
  }
}

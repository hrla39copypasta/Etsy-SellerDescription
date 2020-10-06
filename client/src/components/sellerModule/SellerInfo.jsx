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
    transition: all 300ms ease;
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
  transition: all 150ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0 1px 12px 0 rgba(34,34,34,0.2);
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
    const { firstName, lastName, storeName } = this.props;
    return (
      <div>
        <p>Meet your seller</p>
        <Seller>
          <img src="https://picsum.photos/200" alt="seller" />
          <div>
            <p className="sd_sellerName">
              {firstName}
              &nbsp;
              {lastName}
            </p>
            <p className="sd_ownerText">
              Owner of&nbsp;
              <a href="#">
                {storeName}
              </a>
            </p>
          </div>
        </Seller>

        <MessageButton onClick={this.toggleModal} type="button">
          Message&nbsp;
          {firstName}
          &nbsp;
          {lastName}
        </MessageButton>
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

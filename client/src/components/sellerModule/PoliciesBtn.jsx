import React, { Component } from 'react';
import styled from 'styled-components';
import PolicyModal from './PolicyModal.jsx';

const ShopPoliciesBtn = styled.button`
  background-color: #FFFFFF;
  border: none;
  font-weight: 400;
  margin-left: -10px;
  margin-bottom: 16px;
  outline: none;
  cursor: pointer;

  div {
  position: absolute;
  width: 130px;
  height: 30px;
  border-radius: 10px;
  transform: scale(0);
  transition: all 450ms ease 0ms;
  }

  &:hover > div {
    background: #EEEEEE;
    transform: scale(1);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }

  span {
    position: relative;
    padding: 7px;
    line-height: 30px;
    left: 2px;
  }


`;

export default class PoliciesBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { showModal } = this.state;
    const { storeName } = this.props;
    return (
      <div>
        <ShopPoliciesBtn type="button" onClick={this.toggleModal}>
          <div />
          <span>View shop policies</span>
        </ShopPoliciesBtn>
        {
          showModal
            ? <PolicyModal storeName={storeName} toggleModal={this.toggleModal} />
            : null
        }
      </div>
    );
  }
}

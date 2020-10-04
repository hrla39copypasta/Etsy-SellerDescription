import React, { Component } from 'react';
import styled from 'styled-components';
import PolicyModal from './PolicyModal.jsx';

const ShopPoliciesBtn = styled.button`
  background-color: inherit;
  border: none;
  font-weight: 400;
  padding: 10px;
  border-radius: 10px;
  margin-left: -10px;
  margin-bottom: 16px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #EEEEEE;
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
    return (
      <div>
        <ShopPoliciesBtn type="button" onClick={this.toggleModal}>View shop policies</ShopPoliciesBtn>
        {
          showModal
            ? <PolicyModal toggleModal={this.toggleModal} />
            : null
        }
      </div>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import PolicyModal from './PolicyModal.jsx';

export default class PoliciesBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
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
        <button type="button" onClick={this.toggleModal}>View shop policies</button>
        {
          showModal
            ? <PolicyModal toggleModal={this.toggleModal} />
            : null
        }
      </div>
    );
  }
}

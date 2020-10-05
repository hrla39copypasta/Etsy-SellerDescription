import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .sd_input {
    border: 1px solid #EEEEEE;
    width: 100%;
    padding: 10px 4px 10px 12px;
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;
    border-shadow: 0 1px 12px 0 rgba(34, 34, 34, 0.2);
    margin: 10px auto;
    outline: none;
  }

  .sd_input:focus {
    border-color: black;
  }

  .sd_input:hover {
    border: 1px solid black;
  }
`;

const DeliverToBtn = styled.button`
  background-color: #FFFFFF;
  border: none;
  font-weight: 400;
  margin: 32px 0 32px -10px;
  outline: none;
  cursor: pointer;


  div {
  position: absolute;
  width: 200px;
  height: 30px;
  border-radius: 25px;
  transform: scale(0);
  transition: all 450ms ease 0ms;
  padding: 5px;
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
    left: 3px;
    top: 4px;
  }
`;

export default class DeliverToCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    const { showForm } = this.state;
    this.setState({
      showForm: !showForm,
    });
  }

  render() {
    const { showForm } = this.state;
    return (
      <Wrapper>
        <DeliverToBtn onClick={this.toggleForm} type="button">
          <div />
          <span>Deliver to United States, 90706</span>
        </DeliverToBtn>
        {
          showForm
            ? (
              <form>
                <label>Country</label>
                <br />
                <select className="sd_input">
                  <option selected value="unitedStates">United States</option>
                  <option value="canada">Canada</option>
                  <option value="mexico">Mexico</option>
                  <option value="zanzibar">Zanzibar</option>
                </select>

                <label>Zip or postal code</label>
                <br />
                <input className="sd_input" type="text" />
              </form>
            )
            : null
        }
        <p>Ships from United States</p>
      </Wrapper>
    );
  }
}

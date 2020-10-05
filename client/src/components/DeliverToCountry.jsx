import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    background: white;
    border: none;
    padding: 15px;
    outline: none;
  }

  button:hover {
    cursor: pointer;
    background: #EEEEEE;
    border-radius: 20px;
  }

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
        <button onClick={this.toggleForm} type="button">Deliver to United States, 90706</button>
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

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  margin-right: 24px;

  .title {
    margin: 0 0 6px 0;
  }

  .data {
    font-size: 26px;
    margin: 0;
    font-family: 'Piazzolla', serif;
  }
  `;

const InfoBlock = ({ title, data }) => (
  <Block>
    <p className="title">{title}</p>
    <p className="data">{data}</p>
  </Block>
);

export default InfoBlock;

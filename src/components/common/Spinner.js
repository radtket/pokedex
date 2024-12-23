import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 3px solid #e3350d4d;
  border-radius: 50%;
  border-top-color: #e3350d;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;

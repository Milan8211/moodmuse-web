"use client";

import styled from "styled-components";
import { Input, Select, Switch } from "antd";

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  width: 100%;
  align-items: center;
  > div {
    &:first-child {
      width: 50%;
    }
    &:last-child {
      width: 50%;
    }
  }
  .custom-card {
    p {
      text-align: left;
    }
  }
`;

export const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  text-align: left;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .label {
    font-family: var(--font-inter);
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
`;

export const StyledSelect = styled(Select)`
  height: auto !important;
  width: 100%;
  .ant-select-selector {
    background-color: transparent !important;
    border: 1px solid #8f8f8f !important;
    color: #8f8f8f !important;
    border-radius: 8px !important;
    padding: 0.3125rem 1rem !important;
    input {
      height: auto !important;
      font-size: 1rem !important;
    }
  }
  .ant-select-arrow {
    color: #8f8f8f !important;
  }
`;

export const StyledInput = styled(Input)`
  height: auto !important;
  width: 100%;
  background: transparent !important;
  border: 1px solid #8f8f8f !important;
  color: #8f8f8f !important;
  border-radius: 8px !important;
  padding: 0.5rem 1rem !important;
  height: auto !important;
`;

export const StyledSwitch = styled(Switch)`
  width: fit-content;
`;

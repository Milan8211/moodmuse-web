"use client";

import styled from "styled-components";
import { Input, Switch } from "antd";

export const PlaygroundWrapper = styled.div`
  padding: 2rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin: 2rem 0;
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #495057;
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

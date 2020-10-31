import React from "react";
import "./style.css";
import styled from "styled-components";

const Loading = styled.div`
  border: 16px solid purple;
  border-radius: 50%;
  border-top: 16px solid ${(props) => (props.primary ? "green" : "yellow")};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
`;

export default function Loader() {
  return <Loading primary></Loading>;
}

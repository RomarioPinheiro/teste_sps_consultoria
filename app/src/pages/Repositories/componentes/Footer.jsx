import React from "react";
import Button from "./Button";

const Footer = ({ handleExit }) => {
  return <Button onClick={handleExit}>Sair</Button>;
};

export default Footer;

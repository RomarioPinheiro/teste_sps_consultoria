import React, { useState } from "react";
import Button from "./Button";
import "./AddRepo.css";

const AddRepo = ({ handleRepoAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddRepoClick = () => {
    handleRepoAddition(inputData);
    setInputData("");
  };
  return (
    <div className="add-repo-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-repo-input"
        type="text"
      />
      <div className="add-repo-button-container">
        <Button onClick={handleAddRepoClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddRepo;

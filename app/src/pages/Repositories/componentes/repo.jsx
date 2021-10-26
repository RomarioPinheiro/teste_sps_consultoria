import React from "react";
import { CgClose } from "react-icons/cg";
import "./repo.css";

const Repo = ({ repo, handleRepoDeletion }) => {
  return (
    <div className="repo-container">
      {repo.Repo}
      <div className="buttons-container">
        <button
          className="remove-repo-button"
          onClick={() => handleRepoDeletion(repo.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Repo;

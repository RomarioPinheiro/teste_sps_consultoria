import React from "react";
import Repo from "./repo";

const Repos = ({ repos, handleRepoDeletion }) => {
  return (
    <>
      {repos.map((repo) => (
        <Repo repo={repo} handleRepoDeletion={handleRepoDeletion} />
      ))}
    </>
  );
};

export default Repos;

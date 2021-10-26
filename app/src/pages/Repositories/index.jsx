import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./repositories.css";

import Repos from "./componentes/repos";
import AddRepo from "./componentes/AddRepo";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function Repositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=5"
      );
      setRepos(data);
    };
    fetchRepos();
  }, []);

  const handleRepoAddition = (repoRepo) => {
    const newRepo = [
      ...repos,
      {
        Repo: repoRepo,
        id: Math.random(10),
      },
    ];
    setRepos(newRepo);
    axios.post("https://jsonplaceholder.cypress.io/todos?_limit=5", newRepo);
  };
  const handleRepoDeletion = (repoId) => {
    alert("Está certo disso?");
    const newRepo = repos.filter((repo) => repo.id !== repoId);
    setRepos(newRepo);
  };
  const history = useHistory();
  const handleExit = (e) => {
    history.push("/");
  };
  return (
    <div className="container">
      <Header />
      <AddRepo handleRepoAddition={handleRepoAddition} />
      <Repos repos={repos} handleRepoDeletion={handleRepoDeletion} />
      <Footer handleExit={handleExit} />
    </div>
  );
}

export default Repositories;

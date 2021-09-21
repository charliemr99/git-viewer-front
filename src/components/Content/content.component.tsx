import React from "react";

// assets
import agenda from "../../assets/icons/agenda.svg";
import search from "../../assets/icons/search.svg";
import data from "../../assets/icons/data.svg";

import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { getCommits } from "../../redux/commits/commits.actions";
import Commit from "../Commit/commit.component";

const Content: React.FC = () => {
  // BASE & STATES
  const dispatch = useDispatch();
  const { commits, failure } = useSelector((state: IState) => state.commits);
  const [username, setUsername] = React.useState("charliemr99");
  const [repository, setRepository] = React.useState("git-viewer-back");
  const [commitsData, setCommitsData] = React.useState(commits);

  // SIDE EFFECTS
  React.useEffect(() => {
    dispatch(getCommits({ username, repository }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCommitsData(commits);
  }, [commits]);

  return (
    <>
      <div className="name-bar">
        <img src={agenda} alt="Agenda Logo" />
        <div className="name-bar__userandrepo">
          <input
            type="text"
            id="user_input"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log("username: ", username);
            }}
          ></input>
          <h2>/</h2>
          <input
            type="text"
            id="repo_input"
            placeholder="Repository"
            value={repository}
            onChange={(e) => {
              setRepository(e.target.value);
              console.log("repository: ", repository);
            }}
          ></input>
        </div>
        <div className="name-bar__userandrepo__search">
          <img
            src={search}
            alt="Search Logo"
            onClick={() => {
              dispatch(getCommits({ username, repository }));
            }}
          ></img>
        </div>
      </div>
      <div className="content">
        {commitsData && !failure ? (
          <div className="content__commitcontainer">
            {commitsData.map((item, index) => {
              return (
                <Commit
                  key={index}
                  data={item}
                  username={username}
                  repository={repository}
                />
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="content__empty">
              <img
                src={data}
                alt="No data Logo"
                style={{ width: "35vh", height: "35vh" }}
              />
            </div>
            {failure && (
              <>
                <h5
                  style={{ color: "white" }}
                >{`Repository ${failure.response.data.message}`}</h5>
                <h5 style={{ color: "white" }}>{failure.message}</h5>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Content;

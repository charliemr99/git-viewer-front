import React from "react";
import "./Commit.css";

interface ICommitProps {
  data: any;
  username: string;
  repository: string;
}

const Commit: React.FC<ICommitProps> = ({
  data,
  username,
  repository,
}: ICommitProps) => {
  const commitDate = new Date(data.date);
  const currentDate = new Date();
  const differenceTime = currentDate.getTime() - commitDate.getTime();

  function msToTime(duration: number) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365);

    hours = hours < 10 ? 0 + hours : hours;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    seconds = seconds < 10 ? 0 + seconds : seconds;

    return `commited ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds ago.`;
  }

  return (
    <div className="commit">
      <div className="commit_title">
        <div className="commit_picture">
          <img
            src={data.avatarSrc}
            style={{ width: "4vh", height: "4vh" }}
            alt="author-avatar"
          />
        </div>
        <div className="commit_data">
          <a
            href={`https://github.com/${username}/${repository}/commit/${data.sha}`}
          >
            {data.message}
          </a>
          <small>
            <strong>{data.author}</strong> - {msToTime(differenceTime)}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Commit;

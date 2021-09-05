import React from 'react';

export default function DeveloperTeam({
  imgUrl,
  nameDev,
  gitUsername,
  githubLink,
}) {
  return (
    <div className="column">
      <img
        className="ui avatar image"
        src={imgUrl}
        alt={nameDev}
        style={{ height: '80%', width: '30%' }}
      />
      <div className="content" style={{ textAlign: 'left' }}>
        <div className="header">{nameDev}</div>
        <a href={githubLink}>
          <i className="icon github alternate" style={{ width: '30%' }}>
            {' '}
            {gitUsername}
          </i>
        </a>
      </div>
    </div>
  );
}

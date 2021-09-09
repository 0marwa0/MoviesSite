import React from 'react';

export default function DeveloperTeam({
  imgUrl,
  nameDev,
  gitUsername,
  githubLink,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10',
        margin: '10px',
      }}
    >
      <img
        className="ui avatar image"
        src={imgUrl}
        alt={nameDev}
        style={{ height: '40%', width: '40%' }}
      />
      <div className="content" style={{ textAlign: 'center' }}>
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

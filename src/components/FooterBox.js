import React from 'react';

export default function FooterBox({ props, title }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <ul style={{ listStyle: 'none' }}>
        {props.map((list) => (
          <li key={list}>
            <a href>{list}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

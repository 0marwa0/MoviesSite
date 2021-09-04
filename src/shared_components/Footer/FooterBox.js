import React from 'react';

export default function FooterBox({ props, title }) {
  return (
    <div className="bg-footer-card bg-opacity-40 px-0 text-center mt-5 ml-10">
      <h1 className="text-2xl pb-4 w-100">{title}</h1>
      <ul style={{ listStyle: 'none', width: '20vw' }}>
        {props.map((list) => (
          <li key={list}>
            <a className=" text-footer-link hover:text-footer-header w-2" href>
              {list}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import allData, { developerInfo } from './FooterData';
import DeveloperTeam from './DeveloperTeam';
import FooterBox from './FooterBox';

export default function Footer() {
  const devInfo = developerInfo;
  return (
    <div className="footer bg-footer-bg text-footer-header">
      <div className="ui grid container w-screen ">
        <div className="three column row  ui grid grid-cols-3 gap-x-5">
          <FooterBox props={allData[0]} title="Pages" />
          <FooterBox props={allData[1]} title="Service" />
          <FooterBox props={allData[2]} title="Contact US" />
        </div>
        <h1
          className="one column row centered  text-2xl"
          style={{ textAlign: 'center', width: '100%' }}
        >
          Meet Our Team
        </h1>
        <div className="three column row ml-60  ">
          {devInfo.map((info) => (
            <DeveloperTeam
              key={info.nameDev}
              imgUrl={info.imgUrl}
              nameDev={info.DeveloperName}
              gitUsername={info.gitHubUser}
              githubLink={info.gitHubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

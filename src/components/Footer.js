import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import allData, { developerInfo } from '../footerData';
import DeveloperTeam from './DeveloperTeam';
import FooterBox from './FooterBox';

export default function Footer() {
  const devInfo = developerInfo;
  return (
    <div className="footer">
      <div className="ui grid container ">
        <div className="three column row ">
          <FooterBox props={allData[0]} title="Pages" />
          <FooterBox props={allData[1]} title="Service" />
          <FooterBox props={allData[2]} title="Contact US" />
        </div>
        <h2
          className="one column row centered"
          style={{ textAlign: 'center', width: '100%' }}
        >
          Meet Our Team
        </h2>
        <div className="three column row ">
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

import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import allData, { developerInfo } from './FooterData';
import DeveloperTeam from './DeveloperTeam';
import FooterBox from './FooterBox';
import '../../styles/app.css';

export default function Index() {
  const devInfo = developerInfo;
  console.log('footer');
  return (
    <div className="footer bg-footer-bg text-footer-header">
      <div className="ui grid container w-screen ">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            marginTop: '70px',
          }}
        >
          <FooterBox props={allData[0]} title="Pages" />
          <FooterBox props={allData[1]} title="Service" />
          <FooterBox props={allData[2]} title="Contact US" />
        </div>
        <div
          className="one column row centered  text-2xl"
          style={{ marginLeft: '-50px' }}
        >
          <span> Meet Our Team</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            marginRight: '30px',
          }}
        >
          {devInfo.map((info) => (
            <DeveloperTeam
              key={info.imgUrl}
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

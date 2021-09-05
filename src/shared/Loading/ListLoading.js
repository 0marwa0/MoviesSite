import React from 'react';
import ContentLoader from 'react-content-loader';

const Index = () => (
  <div className="ListItems">
    <ContentLoader
      speed={1.5}
      width="100%"
      height="55px"
      viewBox="0 0 600 80"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="100" y="60" rx="3" ry="90" width="300" height="100px" />
    </ContentLoader>
  </div>
);

export default Index;

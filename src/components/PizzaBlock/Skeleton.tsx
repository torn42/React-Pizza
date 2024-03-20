import React from 'react';
import ContentLoader from 'react-content-loader';

export function Skeleton() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={490}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="120"/>
      <rect x="0" y="270" rx="5" ry="5" width="280" height="24"/>
      <rect x="0" y="305" rx="5" ry="5" width="280" height="85"/>
      <rect x="0" y="415" rx="5" ry="5" width="90" height="27"/>
      <rect x="125" y="407" rx="21" ry="21" width="155" height="40"/>
    </ContentLoader>
  );
}
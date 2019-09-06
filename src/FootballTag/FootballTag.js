import React from 'react';

const FootballTag = ({ icon, memory }) => {
  return (
    <span className="tag football-tag" data-memory={memory}><img src={icon} /></span>
  );
};

export default FootballTag;

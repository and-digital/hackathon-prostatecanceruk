
import React from 'react';

const GolfTag = ({ icon, memory }) => {
  return (
    <span className="tag golf-tag" data-memory={memory}><img src={icon} /></span>
  );
};

export default GolfTag;

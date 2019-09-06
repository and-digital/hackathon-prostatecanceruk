import React from 'react';
import FootballTag from '../FootballTag/FootballTag';
import GolfTag from '../GolfTag/GolfTag';
import img from '../assets/stick-man.png'

const tagsMapper = {
  golf: GolfTag,
  football: FootballTag
}

const ManOfMen = ({ tags }) => {
  return (
    <div className="mom-holder">
      <div className="img-container">
        <img src={img} alt="manOfMen"/>
        {tags.map(tag => {
          const Component = tagsMapper[tag.name];
          return <Component memory={tag.memory} icon={tag.icon} />
        })}
      </div>
    </div>
  );
};

export default ManOfMen;

import React from 'react';
import MusicTag from '../MusicTag/MusicTag';
import GolfTag from '../GolfTag/GolfTag';
import img from '../assets/stick-man.png'

const tagsMapper = {
  golf: GolfTag,
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

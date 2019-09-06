import React from 'react';
import MusicTag from '../MusicTag/MusicTag';
import CookingTag from '../CookingTag/CookingTag';
import img from '../assets/stick-man.png'

const tagsMapper = {
  cooking: CookingTag,
  music: MusicTag
}

const ManOfMen = ({ tags }) => {
  return (
    <div className="mom-holder">
      <div className="img-container">
        <img src={img} alt="manOfMen"/>
        {tags.map(tag => {
          const Component = tagsMapper[tag];
          return <Component />
        })}
      </div>
    </div>
  );
};

export default ManOfMen;

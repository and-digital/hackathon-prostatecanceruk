import React from 'react';

const MemoryInput = ({memorySubmit}) => {
  return (
    <div className="input-container">
      <p>Tell us more about your memory</p>
      <form action="" onSubmit={memorySubmit}>
        <textarea className="text-area" type="text" rows="8"/>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemoryInput;
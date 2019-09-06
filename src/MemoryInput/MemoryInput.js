import React, { useState } from 'react';

const MemoryInput = ({memorySubmit, name}) => {
  const [memory, setMemory] = useState('');

  const submit = (e) => {
    e.preventDefault();
    memorySubmit({
      name,
      memory,
    })
  }

  return (
    <div className="input-container">
      <p>Tell us more about your memory</p>
      <form action="" onSubmit={submit}>
        <textarea className="text-area" type="text" rows="4" value={memory} onChange={(e) => setMemory(e.target.value)} />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemoryInput;

import React from 'react';
import { Collapse } from 'antd';
import MemoryInput from '../MemoryInput/MemoryInput';
const { Panel } = Collapse;

const options = ['golf'];

const ButtonsHolder = ({memorySubmit}) => {
  return (
    <Collapse>
      {options.map(option => (
        <Panel header={option} key={option}>
          <MemoryInput memorySubmit={memorySubmit} name={option}/>
        </Panel>
      ))}
    </Collapse>
  );
};

export default ButtonsHolder;

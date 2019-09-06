import React from 'react';
import { Collapse } from 'antd';
import MemoryInput from '../MemoryInput/MemoryInput';
const { Panel } = Collapse;

const options = ['music', 'cooking'];

const ButtonsHolder = ({clickHandler}) => {
  return (
    <Collapse>
      {options.map(option => (
        <Panel header={option} key={option}>
          <MemoryInput />
        </Panel>
      ))}
    </Collapse>
  );
};

export default ButtonsHolder;

import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const options = ['music', 'cooking'];

const ButtonsHolder = ({clickHandler}) => {
  return (
    <Collapse>
      {options.map(option => (
        <Panel header={option} key={option}>
          This is some placeholder text
        </Panel>
      ))}
    </Collapse>
  );
};

export default ButtonsHolder;

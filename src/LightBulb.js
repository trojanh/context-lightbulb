import React from 'react';
import LightCircuit from './context/LightCircuit';

const LightBulb = () => {
  return (
    <LightCircuit.Consumer>
      {
        ({state}) =>
          <div
          className={`light-bulb ${(state.on ? 'on' : 'off')}`}
          >

          </div>
      }
    </LightCircuit.Consumer>
  );
};

export default LightBulb;

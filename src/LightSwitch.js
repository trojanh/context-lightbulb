import React, {useState} from 'react';
import LightCircuit from './context/LightCircuit';
import './App.css';
const LightSwitch = (props) => {
  const [up, toggleUp] = useState(false);
  return (
    <LightCircuit.Consumer>
      {
        ({flipSwitch, state}) => {

          const handleClick = () =>{
            toggleUp();
            flipSwitch();
          }

          return (
            <button
              onClick={handleClick}
              className={
                `light-switch ${(up ? ' up' : ' down') } ${props.className}`
              }
            >
              <div style={{
                backgroundColor: state.on ? 'green' : 'red'
              }}>{state.on ? 'On' : 'Off'}</div>
            </button>
          )
        }
      }

    </LightCircuit.Consumer>
  );
};

export default LightSwitch;

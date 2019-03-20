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
              <div>
              <div style={{
                      backgroundColor: state.on ? 'green': 'blanchedalmond'
                    }}>On</div>
                    <div style={{
                      backgroundColor: !state.on ? 'red': 'blanchedalmond',
                      zIndex: 1
                    }}>Off</div>

              </div>
            </button>
          )
        }
      }

    </LightCircuit.Consumer>
  );
};

export default LightSwitch;

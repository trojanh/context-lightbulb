import React, {useState} from 'react';
import LightCircuit from './context/LightCircuit';
import LightBulb from './LightBulb';
import LightSwitch from './LightSwitch';

const App = () => {
  const [on, toggleOn] = useState(false);

  return (
    <LightCircuit.Provider
      value={{
        state: {on},
        flipSwitch: () => toggleOn(!on)
      }}
    >
    <div class="App">
      <LightBulb />
      <div className="space-20"></div>
      <LightSwitch />
    </div>

    </LightCircuit.Provider>
  );
};

export default App;

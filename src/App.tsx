import type { FunctionComponent } from 'react';

import './App.css';

import { Counter } from './counter/Counter';
import { TemperatureConverter } from './temperature-converter/TemperatureConverter';

type Challenges = 'counter';

const App: FunctionComponent = () => {
  return (
    <div>
      {/* <Counter /> */}
      <TemperatureConverter />
    </div>
  );
};

export default App;

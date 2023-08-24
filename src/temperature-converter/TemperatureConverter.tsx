'use client';

import { ChangeEvent, FunctionComponent, useState } from 'react';

export const TemperatureConverter: FunctionComponent = () => {
  const [celsius, setCelsius] = useState<number>();
  const [fahrenheit, setFahrenheit] = useState<number>();

  const handleCelsiusChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);

    if (isNaN(value)) {
      setCelsius(undefined);
      return;
    }

    setCelsius(value);
    setFahrenheit(value * (9 / 5) + 32);
  };

  const handleFahrenheitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);

    if (isNaN(value)) {
      setFahrenheit(undefined);
      return;
    }

    setFahrenheit(value);
    setCelsius((value - 32) * (5 / 9));
  };

  return (
    <>
      <label>
        <input
          type="number"
          onChange={handleCelsiusChange}
          value={celsius?.toFixed(1) ?? ''}
        />{' '}
        Celsius
      </label>{' '}
      ={' '}
      <label>
        <input
          type="number"
          onChange={handleFahrenheitChange}
          value={fahrenheit?.toFixed(1) ?? ''}
        />{' '}
        Fahrenheit
      </label>
    </>
  );
};

// TODO
// improve input handling (especially of period, comma)

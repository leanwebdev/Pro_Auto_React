// src/Welcome.jsx
import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h2>Привет, {props.name}!</h2>
      <p>Ты на правильном пути 💪</p>
    </div>
  );
}

export default Welcome;

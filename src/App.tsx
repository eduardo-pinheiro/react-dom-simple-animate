import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Animate, AnimateConfig } from './ReactSimpleAnimate'

AnimateConfig.millisecondTransitionFast = 300;
AnimateConfig.millisecondTransitionRegular = 2000;
AnimateConfig.millisecondTransitionSlow = 7000;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Animate
          currentHiddenState={false}
          animationCallbackFn={() => console.log("ola mundo")}
          animationTransitionType="regular"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Animate>
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Animate, AnimateConfig } from './ReactSimpleAnimate';

AnimateConfig.millisecondTransitionFast = 300;
AnimateConfig.millisecondTransitionRegular = 2000;
AnimateConfig.millisecondTransitionSlow = 10000;

interface Props {
}

interface State {
  visibleState: boolean;
}

export default class extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.state = {
      visibleState: false,
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <button onClick={() => this.setState({ visibleState: !this.state.visibleState })}>trocar</button>
          <Animate
            isVisible={this.state.visibleState}
            animeDirection='down'
            transitionType='fast'
            // transitionMillisecond={300}
            animateCallbackFn={(isVisibleByDom: boolean) => console.log('isVisibleByDom:', isVisibleByDom)}
            style={{ background: 'black' }}
          >
            <img src={logo} className='App-logo' alt='logo' />
          </Animate>
        </header>
      </div>
    )
  }
}
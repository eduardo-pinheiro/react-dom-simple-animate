import React from 'react';
import delay from './delay';
import { AnimateConfig } from "./index";

interface Props {
    currentHiddenState: boolean;
    animationDirection?: 'down' | 'up' | 'left' | 'right';
    animationCallbackFn?: Function;
    animationTransitionType?: 'slow' | 'regular' | 'fast';
    animationMillisecondTransition?: number;
}

interface State {
    currentHiddenState: boolean;
}

export class Animate extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            currentHiddenState: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ currentHiddenState: this.props.currentHiddenState });
    }

    componentDidUpdate = async (prevProps: Props) => {
        if (prevProps.currentHiddenState !== this.props.currentHiddenState) {
            this.updateCurrentHiddenState();
        }
    }

    async updateCurrentHiddenState() {
        const { currentHiddenState, animationCallbackFn } = this.props;
        const animationMillisecondTransition = this.getAnimationMillisecondTransition();
        await delay(animationMillisecondTransition);
        this.setState({ currentHiddenState });
        if (animationCallbackFn) animationCallbackFn();
    }

    getAnimationMillisecondTransition() {
        const { animationTransitionType, animationMillisecondTransition } = this.props;
        if (animationMillisecondTransition) return animationMillisecondTransition;
        switch (animationTransitionType) {
            case 'slow':
                return AnimateConfig.millisecondTransitionSlow;
            case 'regular':
                return AnimateConfig.millisecondTransitionRegular;
            case 'fast':
                return AnimateConfig.millisecondTransitionFast;
            default:
                return AnimateConfig.millisecondTransitionRegular;
        }
    }

    render() {
        if (this.state.currentHiddenState) return null;
        return (
            <div>{this.props.children}</div>
        )
    }
}
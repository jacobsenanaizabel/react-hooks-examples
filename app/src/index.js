import React, { Fragment, Component }  from 'react';
import ReactDOM from 'react-dom';

import Section from './helpers/Section';
import './styles.scss';

import  { Greeting, GreetingClass }  from './hooks/useStateExample';
import { Title, TitleClass }  from './hooks/useEffectExample';
import * as serviceWorker from './serviceWorker';


const FEATURE_TOGGLE = {
    IS_USE_EFFECT_VISIBLE: 'UseEffectExample',
    IS_USE_STATE_VISIBLE: 'UseStateExample'
}

class App extends Component {
    state = {
        isVisible: [
            FEATURE_TOGGLE.IS_USE_STATE_VISIBLE,
            FEATURE_TOGGLE.IS_USE_EFFECT_VISIBLE,
        ],
    };
    

    render() {
        const { isVisible } = this.state;

        return(
        <Fragment>
            <Section
            isVisible={isVisible.includes(FEATURE_TOGGLE.IS_USE_STATE_VISIBLE)}
            heading="useState"
            sectionBg="purple-bg"
            >
            <div>
                <h1 className="heading">new way</h1>
                <Greeting />
            </div>
            <div>
                <h1 className="heading">old way</h1>
                <GreetingClass />
            </div>
            </Section>
            <Section
            isVisible={isVisible.includes(FEATURE_TOGGLE.IS_USE_EFFECT_VISIBLE)}
            heading="useEffect"
            sectionBg="gainsboro-bg"
            >
            <div>
                <h1 className="heading">new way</h1>
                <Title />
            </div>
            <div>
                <h1 className="heading">old way</h1>
                <TitleClass />
            </div>
            </Section>
        </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

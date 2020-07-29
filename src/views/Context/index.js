import React, { Component } from 'react';
import ThemeButton from './components/ThemeButton';
import Transfer from './components/Transfer';
import TestConsumer from './components/TestConsumer';

const ThemeContext = React.createContext('default');
ThemeContext.displayName = 'Theme';
Transfer.contextType = ThemeContext;
class Context extends Component {
    state = {
        contextData: {
            message: 'hello!',
            header: 'jack'
        }
    }
    render() {
        const { contextData } = this.state;
        console.log(React.isValidElement(<Context />)); // true
        console.log(React.isValidElement(Context)); // false
        return (
            <ThemeContext.Provider value={contextData}>
                <Transfer child={ThemeButton} />
                <ThemeContext.Consumer>
                    {/* 函数接收当前的 context 值 */}
                    {context => <TestConsumer context = {context} />}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        )
    }
}

export default Context;

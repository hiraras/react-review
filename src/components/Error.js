import React from 'react';

// 深层的组件报错也会被错误边界捕获到
class ErrorWrapper extends React.Component {
    render() {
        return <Error />;
    }
}

class Error extends React.Component {
    state = {
        count: 1
    }
    componentDidMount() {
        // 不能放在生命周期内抛出错误，会崩溃
        // throw new Error('this is Error component')
    }
    handleClick = () => {
        // 错误边界组件不会捕捉到下面这个错误，因为事件处理器中的错误它本身就包含了错误信息，react知道在屏幕上显示什么
        // throw new Error('this is Error component')
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }
    render() {
        if (this.state.count >= 2) {
            throw new Error('the count is over 2');
        }
        return <fieldset>
            <legend>点击下方文字触发报错</legend>
            <div onClick={this.handleClick}>count: {this.state.count}</div>
        </fieldset>
    }
}

export default ErrorWrapper;

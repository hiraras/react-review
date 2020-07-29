import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/action_types';

const mapStateToProps = (state, props) => {
    return {
        num: state.calculate.num
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        increment: () => dispatch({ type: actions.INCREMENT, payload: 2 }),
        reduce: () => dispatch({ type: actions.REDUCE, payload: 2 }),
    }
}

class Redux extends React.Component {
    render() {
        return <div>
            <p>num: { this.props.num }</p>
            <button onClick={() => this.props.increment(1)}>+</button>
            <button onClick={() => this.props.reduce(1)}>-</button>
        </div>
    }
}
const ConnectedRedux = connect(mapStateToProps, mapDispatchToProps)(Redux)

export default ConnectedRedux;

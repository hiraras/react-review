import { combineReducers } from 'redux';
import * as actions from './action_types';

export const calculate = (state = { num: 0 }, action) => {
    console.log(action)
    switch (action.type) {
        case actions.INCREMENT:
            return Object.assign({}, state, { num: state.num + action.payload })
        case actions.REDUCE:
            return Object.assign({}, state, { num: state.num - action.payload })
        default:
            return state;
    }
}

export default combineReducers({
    calculate
})
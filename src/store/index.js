
import { createStore } from 'redux';
import reducers from './reducers';

const inititalState = {
    calculate: {
        num: 0
    }
}

export default createStore(reducers, inititalState)

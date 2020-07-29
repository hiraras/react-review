import React, { useReducer } from 'react';

// 如果状态是个复杂对象的话，推荐使用reducer，react会对其有优化
const reducer = (state, action) => {
    console.log(state, action)
    switch(action) {
        case 'increment':
            // return { a: 1 } // 会完全覆盖掉，不会合并属性
            return { count: state.count + 1 }
        case 'minus':
            return { count: state.count - 1 }
        default:
            throw new Error();
    }
}

function ReducerCounter() {
    let [state, dispatch] = useReducer(reducer, { count: 0 })
    
    return (
        <div>
            <p>state: {JSON.stringify(state)}</p>
            {/* 正常应该传一个对象，这里演示action的值 */}
            <button onClick={() => dispatch('increment')}>plus count</button>
            <button onClick={() => dispatch('minus')}>minus count</button>
        </div>
    )
}

export default ReducerCounter;
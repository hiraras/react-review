import React from 'react';
import { useState, useCallback } from 'react';

function Child(props) {
    console.log('child is render');
    return <div>this is child<button onClick={props.handleClick}>click</button></div>
}
// 控制是否重新渲染，如果为true则说明不变然后不重新渲染，false则说明变了，重新渲染
function areEqual(prevProps, nextProps) {
    console.log('areEqual')
    return false;
}
const MemoedChild = React.memo(Child, areEqual)

function Test(props){
    const [count, setCount] = useState(0)
    const [extraData, setExtraData] = useState(0)
    const changeData = useCallback(() => {
        setCount(count + 1)
    }, [count])
    
    return <div>
        <button onClick={() => setExtraData(extraData + 1)}>change data, extraData: { extraData }</button>
        <MemoedChild handleClick={changeData} />
    </div>
}

export default Test;

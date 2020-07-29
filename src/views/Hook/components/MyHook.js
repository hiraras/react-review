import { useState, useEffect } from 'react';

// 自定义hook最重要的是它自己也像组件一样具有state
function useHook(id) {
    const [isOnline, setIsOnline] = useState(null)
    const getOnlineStatus = async (id) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        return id > 1
    };
    useEffect(() => {
        (async () => {
            setIsOnline(null)
            setIsOnline(await getOnlineStatus(id))
        })()
    }, [id])
    return isOnline
}

export default useHook;
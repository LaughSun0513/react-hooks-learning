import React,{ useState , useEffect , useCallback } from 'react';

//目标：自定义Hooks函数 可以自适应窗口大小
function useWinSize(){
    const [size,setSize] = useState({
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight,
    });

    // const onResize = () => {
    //     setSize({
    //       width:document.documentElement.clientWidth,
    //       height:document.documentElement.clientHeight,
    //     })
    // }
    //使用useCallback
    const onResize = useCallback(() => {
        setSize({
          width:document.documentElement.clientWidth,
          height:document.documentElement.clientHeight,
        })
    },[])
    useEffect(()=>{
      window.addEventListener('resize',onResize);
      return () => {
        window.removeEventListener('resize',onResize);
      }
    },[]);
    return size
}
function useMyhooks(){
    const { width,height } = useWinSize();
    return (
      <>
        <h2>width:{width}</h2>
        <h2>height:{height}</h2>
      </>
    )
}
export default useMyhooks;

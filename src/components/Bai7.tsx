import React, {useState, useRef, useEffect} from 'react'

export default function Bai7() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>Bai7
      <h1>Giá trị trước: {count}</h1>
      <h2>Giá trị hiện tại: {prevCountRef.current}</h2>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  )
}

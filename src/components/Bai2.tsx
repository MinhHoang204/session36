import {useState} from 'react'

export default function Bai2() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>Bai2
      <button onClick={handleClick}>
        Click {count} lần
      </button>
    </div>
  )
}

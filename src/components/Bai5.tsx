import {useState, useEffect} from 'react'

export default function Bai5() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);
  return (
    <div>Bai5
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

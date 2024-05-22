import {useRef, useEffect} from 'react'

export default function Bai4() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>Bai4
        <input ref={inputRef} type="text" placeholder="Focus me..." />
    </div>
  )
}

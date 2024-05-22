import React, {useState} from 'react'

export default function Bai1() {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    document.title = title ? title : 'localhost:5173';
  }, [title]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <div>Bai1
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Nhập tiêu đề"
      />
    </div>
  )
}

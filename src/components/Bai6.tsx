import {useEffect} from 'react'

export default function Bai6() {
  const generateLoremIpsum = (paragraphs: number) => {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia massa eget arcu cursus, in scelerisque lacus commodo. Morbi euismod odio nec interdum vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in odio at orci rhoncus sollicitudin. Vivamus at orci lorem. Fusce ut tellus eros. Integer vitae urna sed dolor condimentum bibendum. Integer vel nisl lacinia, feugiat ligula a, hendrerit sapien. Donec posuere ex at sapien elementum, ac bibendum velit sollicitudin. Sed suscipit turpis eros, id venenatis lorem ullamcorper a. Sed euismod odio at interdum gravida. Aenean ut sapien sit amet justo interdum sollicitudin.';
    return Array(paragraphs).fill(lorem).join('\n\n');
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.title = `Scroll position: ${scrollPosition}`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ height: '200vh', padding: '20px' }}>Bai6
        <p>{generateLoremIpsum(50)}</p>
    </div>
  )
}

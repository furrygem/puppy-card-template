import Card from './Card';
import './App.css';
import './style.css'
import { useEffect, useState } from 'react';


function parseText(text: string): [string, string, ...string[]] {
  let elements = text.split('\n');
  let result: [string, string, ...string[]] = ['', ''];
  let paragraph: string = '';
  if (elements.length <= 2) {
    console.warn("Letter does not contain required amount of paragraphs");
  }
  for (const [index, el] of elements.entries()) {
    if (index <= 1) {
      console.log(index, el)
      result[index] = el.trim();
      continue;
    }
    if (el.trim() === '') {
      result.push(paragraph);
      paragraph = '';
      continue
    }
    paragraph += `${el}\n`;
  }
  result.push(paragraph);
  return result;
}


function App() {
  const [text, setText] = useState(['']);
  const [firstTitle, setFirstTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  useEffect(() => {
    fetch('/letter.txt')
      .then(res => {
        if (res.status === 404 || res.headers.get('content-type') !== 'text/plain') {
          return "No letter.txt was found on the server\nTake a look at README of the project"
        }
        return res.text();
      })
      .then(res => parseText(res))
      .then(res => {
        setFirstTitle(res[0]);
        setSubtitle(res[1]);
        res.splice(0, 2);
        setText(res);
      })
    }, [])
  return (
    <Card firstTitle={firstTitle}
          subtitle={subtitle}
          text={text}
          width={screenSize.dynamicWidth}
          height={screenSize.dynamicHeight}
    />
  );
}

export default App;

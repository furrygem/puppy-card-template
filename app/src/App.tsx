import Card from './Card';
import './App.css';
import './style.css'
import { useEffect, useState } from 'react';


function parseText(text: string): string[] {
  let elements = text.split('\n');
  let result: string[] = [];
  for (let el of elements) {
    if (el.trim() === '') {
     continue
    }
     result.push(el.trim());
  }

  return result;
}


function App() {
  const [text, setText] = useState(['']);
  useEffect(() => {
    fetch('/letter.txt')
      .then(res => res.text())
      .then(res => parseText(res))
      .then(res => setText(res))
    }, [])
  return (
    <Card firstTitle='Hello, Darling' subtitle='Happy Birthday!' text={text}/>
  );
}

export default App;

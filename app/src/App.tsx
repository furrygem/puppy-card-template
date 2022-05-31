import Card from './Card';
import './App.css';
import './style.css'

function App() {
  let text = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam accusantium quae, distinctio odio pariatur ducimus consectetur placeat facere. Repellendus, aut cum! Inventore numquam aperiam placeat rerum quas optio quia!",
  ]
  return (
    <Card firstTitle='Hello, Darling' subtitle='Happy Birthday!' text={text}/>
  );
}

export default App;

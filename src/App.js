
import './App.css';
import Header from './components/Header';
import { useState } from 'react';


function App() {
  const [inputList, setInputList] = useState("");
  const [items, setitems] = useState([]);


  const ItemHandler = (e) => {
    setInputList(e.target.value);
  }

  const AddItem = () => {
    setitems((previousItem) => {
      return [...previousItem, inputList];
    });
    setInputList("");
  };

  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <input className='input-class' type="text" value={inputList} placeholder="Add todo" onChange={ItemHandler}
        />
        <button className='add-button' onClick={AddItem}>+</button>
        <ul className='todo-list'>
          {/* <li>{inputList}</li> */}
          {
            items.map((itemVal) => {
              return <li>{itemVal}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

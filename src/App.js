import React, { useEffect, useState } from "react";
import "./App.css";
import Input from './components/Input';
import List from './components/List';

function App() {
  // Retrieve data from local storage
  const getLocalItems = () => {
    const storedList = localStorage.getItem('Lists');
    return storedList ? JSON.parse(storedList) : [];
  };

  const [listTodo, setListTodo] = useState(getLocalItems());

  //save data in local storage
  useEffect(() => {
    localStorage.setItem('Lists', JSON.stringify(listTodo));
  }, [listTodo]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  return (
    <div className="Main-Container">
      <div className="center-container">
        <Input addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <List key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        ))}
      </div>
    </div>
  );
}

export default App;

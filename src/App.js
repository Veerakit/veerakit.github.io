import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from './components/Home';
import Register from './components/Register';
import List from './components/List';



const App = () => {
  const [lists, setLists] = useState([]);

    function addList(title) {
        const newList = {title};
        setLists([newList, ...Lists]);
    }

  return (
      <>
        <Navbar />
        <Home />
        <Form addList={addList}/>
        {lists.map((list) =>(
          <List
            name = {list.name}
            date = {list.date}
            type = {list.type}
            kcal = {list.kcal}
            dura = {list.dura}
            desc = {list.desc}
          />
        ))}<List />

        <Register />
      </>
  );
}

export default App;
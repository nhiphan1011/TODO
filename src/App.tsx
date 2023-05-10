import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { ListContainer } from 'module/list';

function App() {
  return (
    <div className="App">
      <ListContainer />
    </div>
  );
}

export default App;

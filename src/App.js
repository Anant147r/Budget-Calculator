import React from 'react';
import AddItems from "./Components/AddItems"
import ItemList from "./Components/ItemList"
import PrintList from "./Components/PrintList"
import './App.css';

function App() {
  return (
    <div className="App">
      <ItemList>
        <AddItems/>
        <PrintList/>
      </ItemList>
    </div>
  );
}

export default App;

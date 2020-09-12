import React, { useState } from 'react';
import './App.css';
import Lists from "./Pages/DailyPlanner/Components/Lists";
import Store from './Pages/DailyPlanner/Components/Store';



function App() {

  const [data, setData] = useState(Store);
  return (
    <div>
      {data.listIds.map((listId: any) => {
        const list = data.lists[listId];
        return <Lists list={list} key={listId} />;
      })}
    </div>
  );
}

export default App;

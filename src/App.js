import logo from './logo.svg';
import './App.css';
import React from "react";
import UserTable from './fd';

const App = () => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33"];

  return (
    <div className="app">
     <UserTable />
    </div>
  );
};

export default App;
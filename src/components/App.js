import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList.jsx';
import CreateLink from './CreateLink.jsx';

function App() {

  return (
    <div className="App">
      <LinkList/>
      <CreateLink/>
    </div>
  );
}

export default App;

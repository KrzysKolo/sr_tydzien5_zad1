import React, { useState } from 'react';
import Modal from './components/modal/Modal';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false)
  const openAlert = () => alert("Welcome to our cafe");
  const openHtml = () => console.log("Our great coffee!!!");
  return (
    <div className="App">
      { show ? <div onClick={closeModalHandler
      } className="back-drop"></div> : null }
     <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
     <Modal show={show} closeModalHandler={closeModalHandler} openAlert={openAlert} openHtml={openHtml} />
    </div>
  );
}

export default App;

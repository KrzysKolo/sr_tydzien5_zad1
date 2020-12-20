import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import ModalImg from './components/modal/ModalImg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false)
  return (
    <div className="App">
      { show ? <div onClick={closeModalHandler
      } className="back-drop"></div> : null }
     <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
     <Modal show={show} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default App;

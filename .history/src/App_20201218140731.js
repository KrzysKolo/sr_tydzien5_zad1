import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false)
  return (
    <div className="App">
     <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
     <Modal show={show} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default App;

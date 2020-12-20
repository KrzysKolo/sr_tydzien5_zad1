import React, { useState } from 'react';
import Modal from './components/modal/Modal';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false)
  const openAlert = () => alert("Zapraszamy do coofee");
  return (
    <div className="App">
      { show ? <div onClick={closeModalHandler
      } className="back-drop"></div> : null }
     <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
     <Modal show={show} closeModalHandler={closeModalHandler} openAlert={openAlert} />
    </div>
  );
}

export default App;

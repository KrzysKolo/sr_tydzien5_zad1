import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
     <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
     <Modal />
    </div>
  );
}

export default App;
